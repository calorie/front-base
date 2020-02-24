const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    hot: true,
    port: 3000,
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
  ]
}
