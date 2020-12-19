const path = require('path');

const rules = require('./rules');
const pluginList = require('./plugins');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevMode ? 'development' : 'production',

  entry: {
    vendor: ['react', 'react-dom'],
    app: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: isDevMode ? 'js/[name].js' : 'js/[name].[contenthash:8].js',
    chunkFilename: isDevMode
      ? 'js/[name].[fullhash].chunk.js'
      : 'js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.css',
      '.scss',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
    ],
    alias: {
      '~': path.resolve(__dirname, '..', 'node_modules'),
      components: path.resolve(__dirname, '..', 'src', 'components'),
      pages: path.resolve(__dirname, '..', 'src', 'pages'),
      stores: path.resolve(__dirname, '..', 'src', 'stores'),
      API: path.resolve(__dirname, '..', 'src', 'API'),
      lib: path.resolve(__dirname, '..', 'src', 'lib'),
      constpack: path.resolve(__dirname, '..', 'src', 'constpack'),
      assets: path.resolve(__dirname, '..', 'src', 'assets'),
      images: path.resolve(__dirname, '..', 'src', 'assets', 'images'),
    },
  },

  optimization: !isDevMode
    ? {
        minimize: true, // UglifyJsPlugin
        concatenateModules: true, // Tells webpack to find segments of the module graph which can be safely concatenated into a single module
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              enforce: true,
            },
          },
        },
      }
    : {},

  module: { rules },

  plugins: pluginList(),

  devtool: isDevMode ? 'inline-source-map' : 'cheap-module-source-map',

  devServer: isDevMode
    ? {
        contentBase: path.join(__dirname, '..', 'public'),
        index: 'index.html',
        port: 3000,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback: true,
      }
    : {},
};
