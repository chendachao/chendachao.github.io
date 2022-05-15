import Bowser from 'bowser'; // ua-parser-js
import DOMPurify from 'dompurify';

const browser = Bowser.getParser(window.navigator.userAgent);
const IE = 'Internet Explorer';

export function isIE() {
  return browser.getBrowserName() === IE;
}

export function isMobile() {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    var mq = match('(pointer:coarse)');
    return mq.matches;
  }
  return false;
}

export const isPC = function () {
  return browser.getPlatformType() === 'desktop';
};

// isHoverableDevice.matches
// pointer: coarse for a pointer such as a finger used on a touch screen
// pointer: fine a mouse
export const isHoverableDevice = window.matchMedia(
  '(hover: hover) and (pointer: fine)'
);

export const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const daysBetween = (d, d1 = new Date(), d2 = new Date()) => {
  const dts = d.getTime();
  const d1ts = d1.getTime();
  const d2ts = d2.getTime();
  return d1ts <= dts && dts <= d2ts;
};

export const tryCatchPormise = async (tryer) => {
  try {
    const result = await tryer();
    return [result, null];
  } catch (error) {
    console.log('error', error);
    return [null, error];
  }
};

export const tryCatch = (tryer) => {
  try {
    const result = tryer();
    return [result, null];
  } catch (error) {
    console.log('error', error);
    return [null, error];
  }
};

export const createLink = ({src, rel}) => {
  const link = document.createElement('link');
  link.setAttribute('rel', rel);
  link.src = src;
  return link;
};

export const createScript = ({src, defer}) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = defer;
  return script;
};

export const getDefaultHTMLPolicy = () => {
  let defaultHTMLPolicy;
  /* global trustedTypes */
  if (window.trustedTypes && trustedTypes.createPolicy) { // Feature testing
    defaultHTMLPolicy = trustedTypes.createPolicy('default', {
      createHTML: (string, sink) => DOMPurify.sanitize(string, {RETURN_TRUSTED_TYPE: true})
    });
  }
  return defaultHTMLPolicy;
};

export const setEscapedHTML = (element, string) => {
  const defaultHTMLPolicy = getDefaultHTMLPolicy();
  if(defaultHTMLPolicy) {
    string = defaultHTMLPolicy.createHTML(string);
  }
  element.innerHTML = string;
};

export const isChinaTimezone = () => {
  let timezone;
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('User\'s timezone', timezone);
  } catch (err) {
    console.log('Not support Intl.DateTimeFormat');
  }

  // WARNING: There are other countries in the same timezone
  const offset = new Date().getTimezoneOffset();
  if (offset/60 == -8) {
    console.log('Hello from China! Maybe!!!');
  }

  return ['Asia/Shanghai', 'Asia/Hong_Kong', 'Asia/Macau', 'Asia/Beijing'].includes(timezone)
        || offset/60 == -8;
};

// browser compatibility issue or user may denied Geolocation
export const geoFindMe = () => {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)){
      // geolocation is not supported
      // get your location some other way
      console.log('Geolocation is not supported by your browser');
      reject();
    }
    function success(position) {
      // for when getting location is a success
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('latitude', latitude,
      'longitude', longitude);
      // http://api.geonames.org/countryCodeJSON?formatted=true&lat=47.03&lng=10.2&username=demo&style=full
      // getCountryCodeByGeocoding(longitude, latitude)
      resolve();
    }
    function error(error_message) {
       // for when getting location results in an error
       console.error('An error has occured while retrieving location', error_message);
       reject();
    }
    navigator.geolocation.getCurrentPosition(success, error);
  });
};

export const ipLookUp = () => {
  // return fetch('http://ip-api.com/json')
  const key = process.env.EXTREME_IP_LOOKUP_KEY;
  return fetch(`https://extreme-ip-lookup.com/json/?key=${key}`)
  .then(data => data.json())
  .then(response => {
    console.log('User\'s Location Data is ', response);
    console.log('User\'s Country', response.country);
    return response.countryCode;
  })
  .catch(err => {
    console.log('Request failed.  Returned status of', err);
    return;
  });
};

export const injectGoogleAnalytics = () => {
  // <!-- Google Analytics -->
  const preconnectLink = createLink({
    src: 'https://www.google-analytics.com',
    rel: 'preconnect'
  });
  const dnsPrefetchLink = createLink({
    src: 'https://www.google-analytics.com',
    rel: 'dns-prefetch'
  });
  // fallback
  const gmScript = createScript({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-143770576-1',
    defer: true
  });
  const gtScript = createScript({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-143770576-1',
    defer: true
  });

  document.head.appendChild(preconnectLink);
  document.head.appendChild(dnsPrefetchLink);
  document.head.appendChild(gmScript);
  document.head.appendChild(gtScript);
};

export const injectBaiduAnalytics = () => {
  //  <!-- Baidu Analytics -->
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?566887a8a643fe1eb0067f1c15c33a2a';
    hm.defer = true;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
};

export const initAnalytics = () => {
  if (isChinaTimezone()) {
    ipLookUp().then(code => {
      if ('CN' === code) {
        injectBaiduAnalytics();
      } else {
        injectGoogleAnalytics();
      }
    }).catch(err => {
      console.error('IP lookup failed', err);
      injectBaiduAnalytics();
    });
  } else {
    injectGoogleAnalytics();
  }
};

export function createElementFromHTMLStr(htmlString) {
  const templateTag = isIE() ? 'div' : 'template';
  const template = document.createElement(templateTag);
  template.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return isIE() ? template.firstElementChild : template.content.firstChild;
}
