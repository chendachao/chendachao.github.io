(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[965],{39686:function(){var e=null,n=document.querySelector("#btnInstall");window.addEventListener("beforeinstallprompt",a),window.matchMedia("(display-mode: standalone)").matches?(console.log("display-mode is standalone"),n.setAttribute("hidden","")):e&&n.removeAttribute("hidden"),window.navigator.standalone===!0?(console.log("display-mode is standalone"),n.setAttribute("hidden","")):e&&n.removeAttribute("hidden");function a(o){e=o,n.removeAttribute("hidden"),n.addEventListener("click",s)}function s(o){e.prompt().then(function(t){return e.userChoice}).then(function(t){t.outcome==="accepted"?(console.log("User accepted the A2HS prompt",t),o.srcElement.setAttribute("hidden",!0)):console.log("User dismissed the A2HS prompt",t),e=null}).catch(function(t){if(console.err(t),!(t.message.indexOf("user gesture")>-1)){if(!(t.message.indexOf("The app is already installed")>-1))return t}})}window.addEventListener("appinstalled",l);function l(o){console.log("Larry Homepage App was installed.",o)}}},function(e){var n=function(s){return e(e.s=s)},a=n(39686)}]);