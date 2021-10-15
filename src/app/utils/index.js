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
