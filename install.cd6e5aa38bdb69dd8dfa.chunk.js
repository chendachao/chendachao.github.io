(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{pjt1:function(e,t){var n=null;function o(e){n.prompt().then((function(e){return n.userChoice})).then((function(t){"accepted"===t.outcome?(console.log("User accepted the A2HS prompt",t),e.srcElement.setAttribute("hidden",!0)):console.log("User dismissed the A2HS prompt",t),n=null})).catch((function(e){if(console.err(e),e.message.indexOf("user gesture")>-1);else if(!(e.message.indexOf("The app is already installed")>-1))return e}))}window.addEventListener("beforeinstallprompt",(function(e){n=e,t.removeAttribute("hidden");var t=document.getElementById("btnInstall");t.addEventListener("click",o)})),window.matchMedia("(display-mode: standalone)").matches?(console.log("display-mode is standalone"),installButton.setAttribute("hidden","")):n&&installButton.removeAttribute("hidden"),!0===window.navigator.standalone?(console.log("display-mode is standalone"),installButton.setAttribute("hidden","")):n&&installButton.removeAttribute("hidden"),window.addEventListener("appinstalled",(function(e){console.log("Larry Homepage App was installed.",e)}))}},[["pjt1",0]]]);