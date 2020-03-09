import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);
const IE = 'Internet Explorer';

export function isIE() {
  return browser.getBrowserName() === IE
}

export function isMobile() {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    var mq = match('(pointer:coarse)');
    return mq.matches;
  }
  return false;
}

