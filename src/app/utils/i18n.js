import IntlMessageFormat from 'intl-messageformat';
import axios from 'axios';

import { tryCatchPormise, setEscapedHTML } from '@app/utils';

const I18n = () => {
  const getDefaultLang = function () {
    let lang =
      localStorage.getItem('lang') ||
      (window.navigator.languages && window.navigator.languages[0]) ||
      null;
    lang =
      lang ||
      window.navigator.language ||
      window.navigator.browserLanguage ||
      window.navigator.userLanguage;

    let shortLang = lang;
    if (shortLang.indexOf('-') !== -1) shortLang = shortLang.split('-')[0];
    if (shortLang.indexOf('_') !== -1) shortLang = shortLang.split('_')[0];

    return shortLang;
  };

  const initialLocale = getDefaultLang() || 'en';
  const languages = [
    {
      key: 'en',
      label: 'English',
    },
    {
      key: 'zh',
      label: 'Chinese',
    },
  ];

  let locale = initialLocale;
  const messages = {};
  const greeting = {
    id: 'APP.GREETING',
    defaultMessage: 'Hello, {name}!',
    description: 'Greeting to welcome the user to the app',
  };

  /**
    format(
      {
        id,
        defaultMessage,
        description,
      },
      opts={}
    )
   */
  function format(i18nMsgObj, opts={}) {
    const localeMsg = messages[locale] || {};
    let message = '';
    if (Object.prototype.toString.call(i18nMsgObj) === '[object String]') {
      message = localeMsg[i18nMsgObj] || i18nMsgObj || 'missed i18n msg';
    } else {
      const {id, defaultMessage, description} = i18nMsgObj;
      message = localeMsg[id] || defaultMessage || id;
    }

    const msgFormat = new IntlMessageFormat(message, locale, null, {ignoreTag: true});
    return msgFormat.format(opts);
  }

  function renderElement(element) {
    const i18nLabels = element.querySelectorAll('*[data-i18n-id]');
    i18nLabels.forEach(i18nLabel => {
      const { i18nId, i18nDefaultMessage } = i18nLabel.dataset;
      setEscapedHTML(i18nLabel, format({id: i18nId, defaultMessage: i18nDefaultMessage}));
    });
  }

  function renderByAttr(element) {
    return element.querySelectorAll('*[data-i18n-attr]').forEach(i18nLabel => {
      const { i18nAttr } = i18nLabel.dataset;
      const attr = i18nAttr.split('=');
      i18nLabel.setAttribute(attr[0], format({id: attr[1]}));
    });
  }

  function render() {
    // Change label
    renderElement(document);

    // Change attr like tooltip
    return renderByAttr(document);
  }

  function setLocale(lang) {
    locale = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }

  const getI18nMessages = async lang => {
    const url = `./assets/i18n/${lang}.json`;
    let [response, err] = await tryCatchPormise(async () => await axios.get(url));
    if(err) {
      response = await axios.get('./assets/i18n/en.json'); // fallback to en
    }
    return response?.data;
  };

  async function reformat(lang) {
    const message = await getI18nMessages(lang);
    messages[lang] = message;
    return render();
  }

  const triggerLanguageHandler = function () {
    setLocale(locale);
    return reformat(locale);
  };

  function init() {
    const languageBtn = document.querySelector('.language-btn');
    languageBtn.addEventListener('click', function (e) {
      locale = locale === 'en' ? 'zh' : 'en';
      // Options 1
      setLocale(locale);
      window.location.reload();
      // Options 2, TODO: the tooltip won't work, and the html title won't change
      // triggerLanguageHandler(locale).then(() => {
      //   //window.location.reload();
      // });
    });
    return triggerLanguageHandler(initialLocale);
  }

  return {
    init,
    renderElement,
    format,
    locale,
  };
};

const i18n = I18n();

export default i18n;
