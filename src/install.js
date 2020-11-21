// TODO: if support sw or manifest then show the install button
let deferredInstallPrompt = null;

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// hide install button if app installed
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
  installButton.setAttribute('hidden', '');
} else {
  deferredInstallPrompt && installButton.removeAttribute('hidden');
}

// Safari
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
  // Analytics.trackEvent('eligible for prompt');
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');

  const installButton = document.getElementById('btnInstall');
  installButton.addEventListener('click', installPWA);
}

/**
 * Event handler for btnInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
  // Analytics.trackEvent('prompt shown')

  // Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt()
  .then(evt => {
    return deferredInstallPrompt.userChoice;
  })
  .then(choiceResult => {
    // Analytics.trackEvent(`prompt ${choice.outcome}`);
    // Log user response to prompt.
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt', choiceResult);
      // Hide the install button, it can't be called twice.
      evt.srcElement.setAttribute('hidden', true);
    } else {
      console.log('User dismissed the A2HS prompt', choiceResult);
    }
    deferredInstallPrompt = null;
  })
  .catch(err => {
    console.err(err);
    if ( err.message.indexOf( "user gesture" ) > -1 ) { 
    //recycle, but make sure there is a user gesture involved 
    } else if ( err.message.indexOf( "The app is already installed" ) > -1 ) { 
    //the app is installed, no need to prompt, but you may need to log or update state values 
    } else { 
      return err; 
    } 
  });
}

// Add event listener for appinstalled event
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
