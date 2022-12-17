import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import './toastify.css';

import { createElementFromHTMLStr } from '.';

const defaultOptions = {
  text: 'Something wrong happened when you see this.',
  // avatar: './assets/images/icons/favicon.ico',
  // node: document.querySelector('.node'),
  // duration: -1,
  // destination: "https://github.com/apvarun/toastify-js",
  // newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'center', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
  },
};

const getTemplateStr = (message, title, avatar) => {
  const img = avatar ? `<img src="${avatar}" class="toastify-avatar" style="align-self: center;margin-right: 1rem;">`
              : '';

  return `
    <span style="display: flex;">
      ${img}
      <span style="display: flex; flex-direction: column;">
        <span class="toastify-title" style="font-weight: 700;margin-bottom: 5px;">${title}</span>
        <span class="toastify-message">${message}</span>
      </span>
    </span>
  `;
};

const notify = {
  Toastify,
  custom: (message, title, overrides={}) => {
    const avatar = overrides.avatar;
    const node = overrides.node || createElementFromHTMLStr(getTemplateStr(message, title, avatar));

    return Toastify({
      ...defaultOptions,
      ...overrides,
      ...{
        node,
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
          ...defaultOptions.style,
          ...overrides.style,
        }
      }
    }).showToast();
  },
  info: (message, title, overrides) => {
    const avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=';
    const templateStr = getTemplateStr(message, title, avatar);

    return notify.custom(message, title, {
      ...overrides,
      className: 'info',
      avatar,
      node: createElementFromHTMLStr(templateStr),
      style: {
        ...defaultOptions.style,
        background: '#2F96B4',
      }
    });
  },
  warning: (message, title, overrides) => {
    const avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=';
    const templateStr = getTemplateStr(message, title, avatar);

    return notify.custom(message, title, {
      ...overrides,
      className: 'warning',
      avatar,
      node: createElementFromHTMLStr(templateStr),
      style: {
        ...defaultOptions.style,
        background: 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))',
        // background: '#F89406',
      }
    });
  },
  success: (message, title, overrides) => {
    const avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==';
    const templateStr = getTemplateStr(message, title, avatar);

    return notify.custom(message, title, {
      ...overrides,
      className: 'success',
      avatar,
      node: createElementFromHTMLStr(templateStr),
      style: {
        ...defaultOptions.style,
        // background: '#51A351',
        // background: 'linear-gradient(to right, #00b09b, #96c93d)'
        background: 'linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))',
      }
    });
  },
  error: (message, title, overrides) => {
    const avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=';
    const templateStr = getTemplateStr(message, title, avatar);

    return notify.custom(message, title, {
      ...overrides,
      className: 'error',
      avatar,
      node: createElementFromHTMLStr(templateStr),
      style: {
        ...defaultOptions.style,
        background: '#BD362F',
      }
    });
  },
};

export default notify;
