(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[203],{21203:function(y,f,l){"use strict";l.r(f),l.d(f,{initDialog:function(){return D},showDialogWithQRCode:function(){return R}});var C=l(92592),L=l(90908);l.e(284).then(l.bind(l,57284));var t=document.querySelector("#dialog"),m="appear-from-top",w="disappear-from-top";function D(){L.Z.registerDialog(t);function r(){t.classList.add("shake"),setTimeout(function(){return t.classList.remove("shake")},300)}var c=document.querySelectorAll(".dialog-dismiss-trigger");c.forEach(function(i){i.addEventListener("click",function(){v()})}),t.addEventListener("close",function(){t.returnValue=""}),t.addEventListener("click",function(i){var d=t.getBoundingClientRect(),s=d.top<=i.clientY&&i.clientY<=d.bottom&&d.left<=i.clientX&&i.clientX<=d.right;s||r()}),t.addEventListener("cancel",function(i){i.preventDefault(),r()})}function E(){t.showModal(),t.classList.add(m),setTimeout(function(){t.classList.remove(m)},650)}function v(r){t.classList.add(w),setTimeout(function(){t.classList.remove(w),t.close(r)},500)}var R=function(){E();var c=/localhost|127.0.0.1/,i=c.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,d=document.querySelector(".mobile-qrcode");d.setAttribute("alt",i);var s=document.createElement("canvas"),h={width:320,height:320,margin:3};C.toCanvas(s,i,{width:h.width,height:h.height,margin:h.margin,errorCorrectionLevel:"H",quality:1,version:5,color:{}}).then(function(o){var e={width:48,height:48},M="/assets/images/icons/favicon.ico",a=o.getContext("2d"),u=new Image;u.src=M,u.onload=function(){var n=6;a.lineWidth=n/3,a.lineJoin="round",a.lineCap="round",a.strokeStyle="#ffffff",a.beginPath(),a.rect(o.width/2-e.width/2-n/4,o.width/2-e.width/2-n/4,e.width+n,e.height+n),a.stroke(),a.fillStyle="#ffffff",a.fillRect(o.width/2-e.width/2-n/4,o.height/2-e.height/2-n/4,e.width+n,e.height+n),a.drawImage(u,o.width/2-e.width/2+n/4,o.height/2-e.height/2+n/4,e.width,e.height),d.src=o.toDataURL("image/png")}}).catch(function(o){d.setAttribute("alt","Failed to generate QRCode, please visit ".concat(i)),console.error(o)});var g=document.querySelector(".download-btn");function p(o){g.download="".concat(window.location.hostname,".png"),g.href=o}g.addEventListener("click",function(){v(),p(d.src)})}}}]);
