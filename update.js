(function () {
// make the whole serviceworker process into a promise so later on we can
// listen to it and in case new content is available a toast will be shown

  window.isUpdateAvailable = new Promise(function (resolve, reject) {
    // lazy way of disabling service workers while developing

    // if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
    if ('serviceWorker' in navigator) {
      // register service worker file
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {

        let refreshBtn = document.getElementById('refersh');
        refreshBtn.onclick = function () {
          reg.update().then(function () {
            console.log('serviceWorker updated');
          });
        };

          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    // new update available
                    resolve(reg);
                  } else {
                    // no update available
                    resolve(false);
                  }
                  break;
              }
            };
          };

        })
        .catch(err => console.error('[SW ERROR]', err));
    }

  });

  // Update:
// this also can be incorporated right into e.g. your run() function in angular,
// to avoid using the global namespace for such a thing.
// because the registering of a service worker doesn't need to be executed on the first load of the page.

  window['isUpdateAvailable']
    .then(reg => {
      if (reg) {
        const confirmUpdate = window.confirm('There are new update available, would like to update now?');
        if (confirmUpdate) {
          // alert('Done!');
          console.log('Done!');
          reg.update();
          window.location.reload(true);
          // reg.sync();
        }
      }
    });

    setTimeout(() => {
      const img = new Image();
      img.src = '/images/dog.png';
      img.style.height = '50px';
      document.body.appendChild(img);
    }, 300);

})();