(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ZDlM:function(e,t,i){"use strict";i.r(t);var n=i("R5/Y"),o=i.n(n);i("mZIp"),i("s82A");function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"isHintDisplayed",!1),r(this,"hideIntro",(function(){localStorage.setItem("hideIntro",!0)})),!JSON.parse(localStorage.getItem("hideIntro"))&&this.initAndShowIntro()}var t,i,n;return t=e,(i=[{key:"initAndShowIntro",value:function(){var e=o()();e.setOptions({showProgress:!0,steps:[{intro:"Hello! This is Larry Chen. Welcome to my Homepage. Click the 'Next' button to know more about me."},{element:"#step1",intro:"This sign brings me good luck, now I share it with you. ^.^"},{element:"#step2",intro:"This is who I am."},{element:"#step3",intro:"You can reach out to me in the following ways:"},{element:"#step4",intro:"Click here to have a surprise",position:"left"}]}),e.start(),e.onskip(this.hideIntro),e.oncomplete(this.hideIntro)}},{key:"initHint",value:function(){var e=o()();e.setOptions({showProgress:!0,hints:[{element:".step11",hint:"This sign brings me good luck, now I share it with you. ^.^",position:"left"},{element:".step12",hint:"This is who I am.",position:"left"},{element:".step13",hint:"You can reach out to me in the following ways:",position:"left"},{element:".step14",hint:"Click here to have a surprise",position:"left"}]}),e.addHints()}},{key:"toggleHint",value:function(){var e=o()();this.isHintDisplayed?(e.hideHints(),this.isHintDisplayed=!1):(this.initHint(),e.showHints(),this.isHintDisplayed=!0)}}])&&s(t.prototype,i),n&&s(t,n),e}();t.default=a}}]);