const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = [
  {
    test: /\.(ts|tsx|js|jsx)?$/,
    exclude: /node_module/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              absoluteRuntime: false,
              helpers: true,
              corejs: 3,
              regenerator: true,
              useESModules: false,
            },
          ],
        ],
      },
    },
  },

  // ts-loader
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
  },

  // style-loader
  {
    test: /\.(sa|sc|c)ss$/,
    exclude: path.resolve(__dirname, '..', 'node_modules'),
    use: [
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: isDevMode,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['autoprefixer']],
          },
          sourceMap: isDevMode,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '..', 'src', 'assets/styles'),
            ],
          },
          sourceMap: isDevMode,
        },
      },
    ],
  },
  {
    // fonts
    test: /\.(eot|otf|woff|ttf|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
    ],
  },

  {
    // images
    test: /\.(gif|jpg|jpeg|png|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: './images/[contenthash:8].[ext]',
        },
      },
    ],
  },
];
