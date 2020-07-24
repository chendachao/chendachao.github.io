import Toasted from 'toastedjs';

import 'toastedjs/dist/toasted.min.css';

const commonConfig = {
  position: 'bottom-center',
  theme: 'alive', // alive, colombo, venice, material, bootstrap, bulma
  // icon : 'update',
  fullWidth: true,
  fitToScreen: false,
};

let toasted = new Toasted({
  ...commonConfig,
});

// toasted.show('New version available.');
// toasted.success('New version available.');
// toasted.error('New version available.');
// toasted.info('New version available.');

export default toasted;
