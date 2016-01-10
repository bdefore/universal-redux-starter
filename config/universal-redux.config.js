/* eslint-disable */
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const projectRoot = path.resolve(__dirname, '..');
const sourceRoot = path.resolve(__dirname, '../src');

module.exports = {

  /*
  // Express configuration
  */
  server: {
    /*
    // The host to run the Express universal renderer. See src/server.js.
    //
    // Expects: String
    */
    host: process.env.HOST || 'http://localhost',

    /*
    // The port to run Express universal renderer will run on. See src/server.js.
    //
    // Expects: Number
    */
    port: process.env.PORT || 3000,

    /*
    // The path at which static assets are served from. If omitted, Express will
    // not serve any static assets. Optional.
    //
    // Expects: String
    */
    staticPath: projectRoot + '/static',

    /*
    // The path at which a favicon image will be served from using the `serve-favicon`
    // library. If omitted, Express will not serve a favicon. Optional.
    //
    // Expects: String
    */
    favicon: projectRoot + '/static/favicon.ico'
  },

  /*
  // Globals available to both serverside and clientside rendering.
  // You may also add your own here.
  */
  globals: {

    /*
    // Whether or not to run redux-logger
    //
    // Expects: Boolean
    */
    __LOGGER__: !isProduction,

    /*
    // Whether or not to run redux-devtools
    //
    // Expects: Boolean
    */
    __DEVTOOLS__: false,
  },

  /*
  // Enable eslint checks per Webpack build. Will not be run
  // on production.
  //
  // Expects: Boolean
  */
  lint: {
    enabled: false,
    config: projectRoot + '/.eslintrc'
  },

  /*
  // Enable native desktop notifications for Webpack build events.
  // Will not be run on production.
  //
  // Expects: Boolean
  */
  notifications: true,

  /*
  // Path to a file with customizations for the default
  // webpack-isomorphic-tools configuration. Optional.
  //
  // Expects: String
  */
  // toolsConfigPath: __dirname + '/webpack-isomorphic-tools.config.js',

  /*
  // When eneabled, will output Webpack and Webpack Isomorphic
  // Tools configurations at startup
  //
  // Expects: Boolean
  */
  verbose: true,

  /*
  // The react-router Routes file, Required. Will be added to Webpack aliases.
  */
  // routes: sourceRoot + '/routes.js',

  redux: {
    /*
    // The path to the index of your Redux reducers. Required. Will be added
    // to Webpcak aliases.
    */
    // reducers: sourceRoot + '/redux/modules/index.js',

    /*
    // A path to an index of middleware functions. On the serverside, these will
    // be called with the Express request and response. Optional.
    //
    // Expects: String
    */
    middleware: sourceRoot + '/redux/middleware/index.js'
  },

  /*
  // The path to your replacement for the default HTML shell. Optional.
  // If not provided, the default used will be that in src/helpers/Html.js.
  // Will be added to Webpack aliases.
  */
  // htmlShell: sourceRoot + '/containers/HtmlShell/HtmlShell.js',

  webpack: {

    /*
    // A list of libraries that do not change frequently between deploys
    // and are best served in the vendor bundle.
    //
    // Expects: Array
    */
    vendorLibraries: [],

    /*
    // Webpack configuration cusomtizations. There are more parameters
    // available than specified here. For the full list, see
    // https://webpack.github.io/docs/configuration.html.
    */
    config: {
    }
  }
};
/* eslint-enable */
