const dotenvCommon = require('dotenv').config({ path: './.env.common' });
const dotenv = require('dotenv').config({ path: process.env.DOTENV_CONFIG_PATH });
const config = {
  ...dotenvCommon.parsed,
  ...dotenv.parsed,
};

const devMode = process.env.APP_ENV === 'development';

module.exports = {
  config,
  devMode,
};
