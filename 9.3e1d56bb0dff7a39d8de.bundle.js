(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ZDlM:function(t,e,i){"use strict";i.r(e);var n=i("R5/Y"),o=i.n(n);i("mZIp"),i("LwL/");function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"isHintDisplayed",!1),r(this,"hideIntro",(function(){localStorage.setItem("hideIntro",!0)})),!JSON.parse(localStorage.getItem("hideIntro"))&&this.initAndShowIntro()}var e,i,n;return e=t,(i=[{key:"initAndShowIntro",value:function(){var t=o()();t.setOptions({showProgress:!0,steps:[{intro:"Hello! This is Larry Chen. Welcome to my Homepage. Click the 'Next' button to know more about me."},{element:"#step1",intro:"This sign brings me good luck, now I share it with you. ^.^",tooltipPosition:"auto"},{element:"#step2",intro:"This is who I am.",tooltipPosition:"top"},{element:"#step3",intro:"You can reach out to me in the following ways:",tooltipPosition:"auto"},{element:"#step4",intro:"Click here to have a surprise",position:"left"}]}),t.start(),t.onskip(this.hideIntro),t.oncomplete(this.hideIntro)}},{key:"initHint",value:function(){var t=o()();t.setOptions({showProgress:!0,hints:[{element:".step11",hint:"This sign brings me good luck, now I share it with you. ^.^",position:"left"},{element:".step12",hint:"This is who I am.",position:"top-left"},{element:".step13",hint:"You can reach out to me in the following ways:",position:"left"},{element:".step14",hint:"Click here to have a surprise",position:"left"}]}),t.addHints()}},{key:"toggleHint",value:function(){var t=o()();this.isHintDisplayed?(t.hideHints(),this.isHintDisplayed=!1):(this.initHint(),t.showHints(),this.isHintDisplayed=!0)}}])&&s(e.prototype,i),n&&s(e,n),t}();e.default=a}}]);