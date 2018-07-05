(function () {
  // make the whole serviceworker process into a promise so later on we can
  // listen to it and in case new content is available a toast will be shown
  let newWorker;

  function showUpdateBar() {
    var snackbar = document.getElementById('snackbar');
    snackbar.className = 'show';
  }

  document.getElementById('reload').addEventListener('click', function () {
    newWorker.postMessage({
      action: 'skipWaiting'
    });
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        var updateBtn = document.getElementById('update');
        updateBtn.onclick = function () {
          reg.update();
          console.log('Update done!')
        };
        return reg;
      })
      .then(reg => {
        reg.addEventListener('updatefound', () => {
          // A wild service worker has appeared in reg.installing!
          newWorker = reg.installing;

          console.log('updatefound');

          newWorker.addEventListener('statechange', () => {
            // Has network.state changed!
            console.log('statechange', newWorker.state);
            switch (newWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // new update available
                  showUpdateBar();
                } else {
                  // no update available
                  console.log('dont show a toast', newWorker.state);
                }
                break;
            }
          });
        });
      });

    var refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      console.log('controllerchange');
      if (refreshing) return;

      navigator.serviceWorker.ready.then(function (swRegistration) {
        return swRegistration.sync.register('removeCache');
      }).then(() => {
        window.location.reload();
        refreshing = true;
      });

    });

  }

  setTimeout(() => {
    const img = new Image();
    img.src = '/images/maria.png';
    img.style.height = '50px';
    document.body.appendChild(img);
  }, 300);

})();