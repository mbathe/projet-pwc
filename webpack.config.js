/*********************************
 *       import webpack plugins
 ********************************/
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const moduleToCdn = require('module-to-cdn');

/*********************************
 *       define file paths
 ********************************/
const destination = 'dist';

/*********************************
 *    client entry point paths
 ********************************/
const clientEntrypoints = [
  {
    name: 'CLIENT - Document',
    entry: './src/client/document-list/index.js',
    filename: 'documents.html',
    template: './src/client/document-list/index.html',
  },
  
];

/*********************************
 *       Declare settings
 ********************************/

// any shared client & server settings
const sharedConfigSettings = {
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

// appscript copy settings, to copy this file over to the destination directory
const appsscriptConfig = {
  name: 'COPY APPSSCRIPT.JSON',
  entry: './appsscript.json',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './appsscript.json',
      },
    ]),
  ],
};

// config shared for all client settings
const clientConfig = {
  ...sharedConfigSettings,
  output: {
    path: path.resolve(__dirname, destination),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

// config for EACH client entrypoint
const clientConfigs = clientEntrypoints.map(clientEntrypoint => {
  return {
    ...clientConfig,
    name: clientEntrypoint.name,
    entry: clientEntrypoint.entry,
    plugins: [
      new HtmlWebpackPlugin({
        template: clientEntrypoint.template,
        filename: clientEntrypoint.filename,
        inlineSource: '^[^(//)]+.(js|css)$', // embed all js and css inline, exclude packages with '//' for dynamic cdn insertion
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new WebpackCleanPlugin(['main.js'], {
        basePath: path.join(__dirname, destination),
      }),
      // this plugin allows us to add dynamically load packages from cdn
      new DynamicCdnWebpackPlugin({
        // set "verbose" to true to print console logs on CDN usage while webpack builds
        verbose: false,
        resolver: (packageName, packageVersion, options) => {
          const packageSuffix = options.env === 'production' ? '.min.js' : '.js'
          const moduleDetails = moduleToCdn(
            packageName,
            packageVersion,
            options
          );
          if (moduleDetails) {
            return moduleDetails;
          }
          switch (packageName) {
            case 'react-transition-group':
              return {
                name: packageName,
                var: 'ReactTransitionGroup',
                version: packageVersion,
                url: `https://unpkg.com/react-transition-group@${packageVersion}/dist/react-transition-group${packageSuffix}`,
              };
            case 'react-bootstrap':
              return {
                name: packageName,
                var: 'ReactBootstrap',
                version: packageVersion,
                url: `https://unpkg.com/react-bootstrap@${packageVersion}/dist/react-bootstrap${packageSuffix}`,
              };
           case '@material-ui/core':
              return {
                name: packageName,
                var: 'Material-UI',
                version: packageVersion,
                url: `https://unpkg.com/@material-ui/core@${packageVersion}/dist/@material-ui/core${packageSuffix}`,
              };
            case 'material-table':
              return {
                name: packageName,
                var: 'Material-Table',
                version: packageVersion,
                url: `https://unpkg.com/material-table@${packageVersion}/dist/material-table${packageSuffix}`,
              };
            case '@material-ui/icons':
                return {
                  name: packageName,
                  var: '@Material-UI/Icons',
                  version: packageVersion,
                  url: `https://unpkg.com/@material-ui/icons@${packageVersion}/dist/@material-ui/icons${packageSuffix}`,
                };

            case '@material-ui/lab':
                return {
                  name: packageName,
                  var: '@Material-UI/Lab',
                  version: packageVersion,
                  url: `https://unpkg.com/@material-ui/lab@${packageVersion}/dist/@material-ui/lab${packageSuffix}`,
                };
             
            default:
              return null;
          }
        },
      }),
    ],
  };
});

const serverConfig = {
  ...sharedConfigSettings,
  name: 'SERVER',
  entry: './src/server/index.js',
  output: {
    filename: 'code.js',
    path: path.resolve(__dirname, destination),
    libraryTarget: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            properties: false,
          },
          mangle: false,
          module: false,
          output: {
            beautify: true,
          },
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
  plugins: [new GasPlugin()],
};

module.exports = [
  // 1. Copy the appscript file.
  appsscriptConfig,
  // 2. One client bundle for each client entrypoint.
  ...clientConfigs,
  // 3. Bundle the server
  serverConfig,
];
