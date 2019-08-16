const DotenvPlugin = require('dotenv-webpack');

const { NODE_ENV } = process.env;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: /src/,
        loader: 'eslint-loader',
        options: {
          emitWarning: NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [new DotenvPlugin()],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
