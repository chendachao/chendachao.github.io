import { daysBetween } from '../utils';

const targetDate = new Date(2020, 3, 4); // Tomb-Sweeping Day

function Theme() {
  const setTheme = (theme) => {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-theme-style', theme);
  };

  if (daysBetween(new Date(), targetDate) <= 1) {
    setTheme('gray');
  } else {
    let defaultTheme = localStorage.getItem('theme');
    defaultTheme && setTheme(defaultTheme);

    let moon = document.querySelector('.moon');
    moon.addEventListener('click', () => {
      const body = document.getElementsByTagName('body')[0];
      let theme =
        body.getAttribute('data-theme-style') === 'light' ? 'dark' : 'light';
      setTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }
}

export default Theme;
