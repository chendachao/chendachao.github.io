var imgUrl = 'https://chendachao.netlify.app/assets/images/screenshots/screenshot1.jpg';
var lineLink = 'https://chendachao.netlify.app';
var descContent = 'Welcome my friend, click to know more about me 👉';
var shareTitle = 'Larry Chen\' Homepage';
var appid = '';
/* eslint-disable no-undef */
function shareFriend() {
  window.WeixinJSBridge.invoke(
    'sendAppMessage',
    {
      'appid': appid,
      'img_url': imgUrl,
      'img_width': '640',
      'img_height': '640',
      'link': lineLink,
      'desc': descContent,
      'title': shareTitle,
    },
    function (res) {
      // _report('send_msg', res.err_msg);
    },
  );
}
function shareTimeline() {
  window.WeixinJSBridge.invoke(
    'shareTimeline',
    {
      'img_url': imgUrl,
      'img_width': '640',
      'img_height': '640',
      'link': lineLink,
      'desc': descContent,
      'title': shareTitle,
    },
    function (res) {
      // _report('timeline', res.err_msg);
    },
  );
}
function shareWeibo() {
  window.WeixinJSBridge.invoke(
    'shareWeibo',
    {
      'content': descContent,
      'url': lineLink,
    },
    function (res) {
      // _report('weibo', res.err_msg);
    },
  );
}
// WeChat browser will initial by above function and trigger WeixinJSBridgeReady event.
document.addEventListener(
  'WeixinJSBridgeReady',
  function onBridgeReady() {
    // share to friend
    window.WeixinJSBridge.on('menu:share:appmessage', function (argv) {
      shareFriend();
    });

    // share to timeline
    window.WeixinJSBridge.on('menu:share:timeline', function (argv) {
      shareTimeline();
    });

    // share to weibo
    window.WeixinJSBridge.on('menu:share:weibo', function (argv) {
      shareWeibo();
    });
  },
  false,
);
/* eslint-enable no-undef */
