(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[203],{1203:function(S,g,d){"use strict";d.r(g),d.d(g,{showModal:function(){return E},closeModal:function(){return s},displayQRCode:function(){return y}});var C=d(2592),L=d(908);d.e(284).then(d.bind(d,7284));var t=document.querySelector("#dialog"),m="appear-from-top",w="disappear-from-top";L.Z.registerDialog(t);function E(){t.showModal(),t.classList.add(m),setTimeout(function(){t.classList.remove(m)},650)}function s(e){t.classList.add(w),setTimeout(function(){t.classList.remove(w),t.close(e)},500)}function v(){t.classList.add("shake"),setTimeout(function(){return t.classList.remove("shake")},300)}var p=document.querySelectorAll(".dialog-dismiss-trigger");p.forEach(function(e){e.addEventListener("click",function(){s()})}),t.addEventListener("close",function(){t.returnValue=""}),t.addEventListener("click",function(e){var l=t.getBoundingClientRect(),r=l.top<=e.clientY&&e.clientY<=l.bottom&&l.left<=e.clientX&&e.clientX<=l.right;r||v()}),t.addEventListener("cancel",function(e){e.preventDefault(),v()});var y=function(){var l=/localhost|127.0.0.1/,r=l.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,c=document.querySelector(".mobile-qrcode");c.setAttribute("alt",r);var M=document.createElement("canvas"),h={width:320,height:320,margin:3};C.toCanvas(M,r,{width:h.width,height:h.height,margin:h.margin,errorCorrectionLevel:"H",quality:1,version:5,color:{}}).then(function(i){var o={width:48,height:48},D="/assets/images/icons/favicon.ico",a=i.getContext("2d"),f=new Image;f.src=D,f.onload=function(){var n=6;a.lineWidth=n/3,a.lineJoin="round",a.lineCap="round",a.strokeStyle="#ffffff",a.beginPath(),a.rect(i.width/2-o.width/2-n/4,i.width/2-o.width/2-n/4,o.width+n,o.height+n),a.stroke(),a.fillStyle="#ffffff",a.fillRect(i.width/2-o.width/2-n/4,i.height/2-o.height/2-n/4,o.width+n,o.height+n),a.drawImage(f,i.width/2-o.width/2+n/4,i.height/2-o.height/2+n/4,o.width,o.height),c.src=i.toDataURL("image/png")}}).catch(function(i){c.setAttribute("alt","Failed to generate QRCode, please visit ".concat(r)),console.error(i)});var u=document.querySelector(".download-btn");function R(i){u.download="".concat(window.location.hostname,".png"),u.href=i}u.addEventListener("click",function(){s(),R(c.src)})}}}]);
