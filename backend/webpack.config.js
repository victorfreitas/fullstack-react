const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  stats: 'errors-only',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.json'],
  },
}
