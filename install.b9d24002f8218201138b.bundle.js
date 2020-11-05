(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["install"],{

/***/ "pjt1":
/*!************************!*\
  !*** ./src/install.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// TODO: if support sw or manifest then show the install button
var deferredInstallPrompt = null;
var installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA); // CODELAB: Add event listener for beforeinstallprompt event

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent); // hide install button if app installed

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
  installButton.setAttribute('hidden', '');
} else {
  deferredInstallPrompt && installButton.removeAttribute('hidden');
} // Safari


if (window.navigator.standalone === true) {
  console.log('display-mode is standalone');
  installButton.setAttribute('hidden', '');
} else {
  deferredInstallPrompt && installButton.removeAttribute('hidden');
}
/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} evt
 */


function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}
/**
 * Event handler for btnInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */


function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt(); // Hide the install button, it can't be called twice.

  evt.srcElement.setAttribute('hidden', true); // CODELAB: Log user response to prompt.

  deferredInstallPrompt.userChoice.then(function (choice) {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt', choice);
    } else {
      console.log('User dismissed the A2HS prompt', choice);
    }

    deferredInstallPrompt = null;
  });
} // CODELAB: Add event listener for appinstalled event


window.addEventListener('appinstalled', logAppInstalled);
/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */

function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log('Larry Homepage App was installed.', evt);
}

/***/ })

},[["pjt1","runtime"]]]);
//# sourceMappingURL=install.b9d24002f8218201138b.bundle.js.map