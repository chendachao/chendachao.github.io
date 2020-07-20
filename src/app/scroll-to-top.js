

//  <button class="scroll-to-top-btn">Scroll To Top</button>

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// https://stackoverflow.com/a/48942924/6294371
export const scrollToTop = (ratio = 20) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if(c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / ratio); // Tip: for slower motion of the scrolling, increase the hardcoded number 8. The bigger the number - the smoother/slower the scrolling.
  }
}

// Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });

const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
scrollToTopBtn && scrollToTopBtn.addEventListener('click', () => {
  scrollToTop();
});

