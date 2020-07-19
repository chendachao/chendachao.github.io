import IntlMessageFormat from 'intl-messageformat';
import axios from 'axios';

const I18n = () => {
  const getDefaultLang = function () {
    let lang = localStorage.getItem('lang') || (window.navigator.languages && window.navigator.languages[0]) || null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

    let shortLang = lang;
    if (shortLang.indexOf('-') !== -1) shortLang = shortLang.split('-')[0];
    if (shortLang.indexOf('_') !== -1) shortLang = shortLang.split('_')[0];

    console.log(lang, shortLang);
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
    id: 'app.greeting',
    defaultMessage: 'Hello, {name}!',
    description: 'Greeting to welcome the user to the app',
  };

  function format(key, opts) {
    opts = opts || {};

    const localeMsg = messages[locale];

    var msg = new IntlMessageFormat(localeMsg[key], locale);
    return msg.format(opts);
  }

  function render() {
    const i18nLabels = document.querySelectorAll('*[data-i18n-id]');
    i18nLabels.forEach(i18nLabel => {
      const {i18nId} = i18nLabel.dataset;
      i18nLabel.innerHTML = format(i18nId);
    });

    document.querySelectorAll('*[data-i18n-attr]').forEach(i18nLabel => {
      const {i18nAttr} = i18nLabel.dataset;
      const attr = i18nAttr.split('=');
      i18nLabel.setAttribute(attr[0], format(attr[1]));
    });

    document.querySelectorAll('template').forEach(template => {
      const content = template.content;
      content.querySelectorAll('[data-i18n-id]').forEach(i18nLabel => {
        console.log('i18nLabel', i18nLabel);
        const {i18nId} = i18nLabel.dataset;
        i18nLabel.innerHTML = format(i18nId);
      });
    });

  }

  function changeLocale(lang) {
    locale = lang;
    localStorage.setItem('lang', lang);
  }

  const getI18nMessages = async lang => {
    const url = `/assets/i18n/${lang}.json`;
    let response;
    try {
      response = await axios.get(url);
    } catch (error) {
      response = await axios.get('/assets/i18n/en.json'); // fallback to en
    }
    return response.data;
  };

  async function reformat(lang) {
    const message = await getI18nMessages(lang);
    messages[lang] = message;
    render();
  }

  const languageBtn = document.querySelector('.language-btn');
  languageBtn.setAttribute('data-lang', initialLocale);

  reformat(initialLocale);

  const languageHandler = function () {
    let lang = this.dataset.lang;
    // this.setAttribute('title', `Change to ${lang}`);
    lang = lang === 'en' ? 'zh' : 'en';
    changeLocale(lang);
    window.location.reload(); // TODO：rm
    // reformat(lang);
    // this.setAttribute('data-lang', lang);
  }

  languageBtn.addEventListener('click', languageHandler);

  return {
    format
  }
};

export default I18n;
