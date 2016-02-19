const path = require('path');
// const isProduction = process.env.NODE_ENV === 'production';
// const projectRoot = path.resolve(__dirname, '..');
const sourceRoot = path.resolve(__dirname, '../src');

module.exports = {
  /*
  // The root component factory file. Optional. Will be added to Webpack aliases.
  */
  rootClientComponent: sourceRoot + '/rootClientComponent.js',

  /*
  // The root component factory file. Optional.
  */
  rootServerComponent: sourceRoot + '/rootServerComponent.js',
};
