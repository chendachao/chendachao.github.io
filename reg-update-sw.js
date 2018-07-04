(function () {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);

        let refreshBtn = document.getElementById('refersh');
        refreshBtn.onclick = function () {
          registration.update().then(function (e) {
            console.log('serviceWorker updated');
          });
        };


        // update
        registration.installing; // the installing worker, or undefined
        registration.waiting; // the waiting worker, or undefined
        registration.active; // the active worker, or undefined
        registration.addEventListener('updatefound', () => {

          // A wild service worker has appeared in reg.installing!
          const newWorker = registration.installing;
          newWorker.state;
          console.log('updatefound');
          // "installing" - the install event has fired, but not yet complete
          // "installed"  - install complete
          // "activating" - the activate event has fired, but not yet complete
          // "activated"  - fully active
          // "redundant"  - discarded. Either failed install, or it's been
          //                replaced by a newer version

          newWorker.addEventListener('statechange', () => {
            // newWorker.state has changed
            console.log('statechange');
          });

        });



        // Notification.requestPermission().then(function (permission) {
        //   console.log('permission', permission);
        //   if (permission === 'granted') {
        //     const options = {
        //       "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
        //       "icon": "images/icon-192x192.png",
        //       "vibrate": [200, 100, 200, 100, 200, 100, 400],
        //       "tag": "request",
        //       "actions": [{
        //           "action": "yes",
        //           "title": "Yes",
        //           "icon": "images/icon-192x192.png"
        //         },
        //         {
        //           "action": "no",
        //           "title": "No",
        //           "icon": "images/icon-192x192.png"
        //         }
        //       ]
        //     };
        //     registration.showNotification('title', options);
        //   }
        // });
      })
      .catch(err => console.log('ServiceWorker registration failed: ', err)); // registration failed :(
    });


    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // This fires when the service worker controlling this page
      // changes, eg a new worker has skipped waiting and become
      // the new active worker.
      console.log('controllerchange');
    });

  }


  setTimeout(() => {
    const img = new Image();
    img.src = '/images/dog.png';
    img.style.height = '50px';
    document.body.appendChild(img);
  }, 300);

})()