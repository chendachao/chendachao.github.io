var getScrollTop = function () {
  // Top offset
  // document.body.scrollTop alone should do the job but that actually works only in case of Chrome.
  // With IE and Firefox it also works sometimes (seemingly with very simple pages where you have
  // only a <pre> or something like that) but I don't know when. This hack seems to work always.
  var scrollTop =
    window.pageYOffset ||
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop ||
    window.scrollY
  return scrollTop
}

var getOffsetHeight = function () {
  // The overall height of the html
  // Grodriguez's fix for scrollHeight:
  // accounting for cases where html/body are set to height:100%
  // document.body.offsetHeight ||
  var offsetHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight
  return offsetHeight
}

var getScrollLeft = function () {
  var scrollLeft =
    (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft
  return scrollLeft
}

var lastScrollTop = getScrollTop()

window.addEventListener('scroll', function (ev) {
  console.log('Scroll vertical or herizontal')

  // currentScrollTop
  var scrollTop = getScrollTop()
  var offsetHeight = getOffsetHeight()

  if (scrollTop > lastScrollTop) {
    console.log('Scroll down')
    // >= is needed because if the horizontal scrollbar is visible then window.innerHeight includes
    // it and in that case the left side of the equation is somewhat greater.
    // window.innerHeight: viewport height
    // var scrolledToBottom = (scrollTop + window.innerHeight) >= offsetHeight - 2;
    var scrolledToBottom = scrollTop + window.innerHeight >= offsetHeight
    if (scrolledToBottom) {
      console.log("you're at the bottom of the page")
    }
  } else {
    console.log('Scroll up')
    var scrolledToTop = scrollTop === 0

    if (scrolledToTop) {
      console.log("you're at the top of the page")
    }
  }

  lastScrollTop = scrollTop
})

// As a bonus: how to scroll to the bottom programmatically by keeping the horizontal scrollpos:
// Since window.innerHeight includes the height of the horizontal scrollbar when it is visible
// the correct vertical scrollTop would be
// scrollHeight-window.innerHeight+sizeof(horizontal_scrollbar)
// Since we don't know the visibility/size of the horizontal scrollbar
// we scroll to scrollHeight that exceeds the value of the
// desired scrollTop but it seems to scroll to the bottom with all browsers
// without problems even when the horizontal scrollbar is visible.
// window.scrollTo(scrollLeft, offsetHeight);

// <button class="hello">hello</button>
// <button class="scroll-to-top-btn">Scroll To Top</button>
// <button class="scroll-into-view-btn">Scroll into View</button>

// https://stackoverflow.com/a/48942924/6294371
export var scrollToTop = (ratio = 20, smooth) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    var currentScrollTop = getScrollTop()
    if (currentScrollTop > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, currentScrollTop - currentScrollTop / ratio) // Tip: for slower motion of the scrolling, increase the hardcoded number 8. The bigger the number - the smoother/slower the scrolling.
    }
  }
}

export var scrollToBottom = (ratio = 20, smooth) => {
  var offsetHeight = getOffsetHeight()
  if (smooth) {
    window.scrollTo({
      top: offsetHeight,
      behavior: 'smooth',
    })
  } else {
    var currentScrollTop = getScrollTop()
    var scrollBottom = currentScrollTop + window.innerHeight - offsetHeight
    if (scrollBottom < 0) {
      window.requestAnimationFrame(scrollToBottom)
      window.scrollTo(0, scrollBottom - scrollBottom / ratio) // Tip: for slower motion of the scrolling, increase the hardcoded number 8. The bigger the number - the smoother/slower the scrolling.
    }
  }
}

// Scroll to a certain element
export var scrollIntoView = element => {
  element.scrollIntoView({
    behavior: 'smooth',
  })
}

const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')
scrollToTopBtn &&
  scrollToTopBtn.addEventListener('click', () => {
    scrollToTop(null, true)
    // scrollToTop();
  })

const scrollToBottomBtn = document.querySelector('.scroll-to-bottom-btn')
scrollToBottomBtn &&
  scrollToBottomBtn.addEventListener('click', () => {
    scrollToBottom(null, true)
    // scrollToBottom();
  })

const scrollToViewBtn = document.querySelector('.scroll-to-view-btn')
scrollToViewBtn &&
  scrollToViewBtn.addEventListener('click', () => {
    scrollIntoView(document.querySelector('.hello'))
  })
