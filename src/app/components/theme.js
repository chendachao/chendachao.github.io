import { daysBetween } from '../utils';

const startDate = new Date(2020, 3, 4); // Tomb-Sweeping Day
const endDate = new Date(2020, 7, 4);

function Theme() {
  const setTheme = theme => {
    const body = document.querySelector('body');
    body.setAttribute('data-theme', theme);
  };

  if (daysBetween(new Date(), startDate, endDate)) {
    setTheme('gray');
  } else {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const isSystemDarkTheme = mediaQueryList.matches;
    let defaultTheme = localStorage.getItem('theme') || (isSystemDarkTheme && 'dark');
    defaultTheme && setTheme(defaultTheme);

    let moon = document.querySelector('.moon');

    moon.addEventListener('click', () => {
      const body = document.querySelector('body');
      let theme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }
}

export default Theme;
