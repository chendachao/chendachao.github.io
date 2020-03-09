
function Theme() {
  const setTheme = (theme) => {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-theme-style', theme);
  };
  
  let defaultTheme = localStorage.getItem('theme');
  defaultTheme && setTheme(defaultTheme);
  
  let moon = document.querySelector('.moon');
  moon.addEventListener('click', () => {
    const body = document.getElementsByTagName('body')[0];
    let theme = body.getAttribute('data-theme-style') === 'light' ? 'dark' : 'light';
    setTheme(theme);
    localStorage.setItem('theme', theme);
  });
}

export default Theme;

