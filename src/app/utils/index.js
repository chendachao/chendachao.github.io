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

export const daysDiff = (d1, d2) => {
  // const diff = Math.abs(d1.getTime() - d2.getTime());
  const diff = d1.getTime() - d2.getTime();
  return diff / (1000 * 60 * 60 * 24);
};

export const isSameDay = (d1, d2) => {
  return daysDiff(d1, d2) >= -1 && daysDiff(d1, d2) <= 1;
};

export const daysBetween = (d, d1 = new Date(), d2 = new Date()) => {
  const diff1 = daysDiff(d, d1);
  const diff2 = daysDiff(d2, d);
  return diff1 >= -1 && diff2 >= -1;
};
