import Bowser from 'bowser';

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
