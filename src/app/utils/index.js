import Bowser from 'bowser';

export * from './i18n';
export * from './toasted';

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

export const isPC = function() {
  return browser.getPlatformType() === 'desktop';
};

export const daysBetween = (d1, d2) => {
  const diff = Math.abs(d1.getTime() - d2.getTime());
  return diff / (1000 * 60 * 60 * 24);
};
