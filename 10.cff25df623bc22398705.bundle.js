(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Hh5m:function(e,t,o){"use strict";o.r(t);var n=o("0FX9"),i=o.n(n),c=o("pWKE");t.default=function(){var e=/localhost|127.0.0.1/.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,t=document.querySelector("#dialog"),o=document.querySelectorAll(".dialog-dismiss-trigger"),n=document.querySelector(".qrcode-handler");c.a.registerDialog(t),n.addEventListener("click",(function(){t.showModal();var o=document.querySelector(".mobile-qrcode");i.a.toDataURL(e,{errorCorrectionLevel:"H",type:"image/jpeg",quality:1,margin:1,color:{}}).then((function(e){o.src=e})).catch((function(t){o.setAttribute("alt",e),console.error(t)}))})),o.forEach((function(e){e.addEventListener("click",(function(){t.close()}))})),t.addEventListener("click",(function(e){var n=t.getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.bottom&&n.left<=e.clientX&&e.clientX<=n.right||(t.classList.add("shake"),setTimeout((function(){return t.classList.remove("shake")}),300),o[1].focus())}))}}}]);