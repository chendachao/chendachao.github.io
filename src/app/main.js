
import PopperJs from 'popper.js';

const hideWechatCode = (popup) => {
  return () => {
    // popup.hidden = true;
    popup.style.visibility = 'hidden';
  };
};


const displayWechatCode = (ref, popup) => {
  return () => {
    // popup.hidden = false;
    popup.style.visibility = 'visible';
    const popper = new PopperJs(ref, popup, {
      placement: 'top',
      onCreate: function (data) {
      },
      modifiers: {
        flip: {
          behavior: ['left', 'right', 'top', 'bottom']
        },
        offset: {
          enabled: true,
          offset: '0,3'
        }
      }
    });
  };
};


export {
  hideWechatCode,
  displayWechatCode
};
