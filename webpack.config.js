/*
    ./webpack.config.js
*/
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, "."),
    entry: './src/index.js',
  output: {
    path: __dirname + "/dist/",
    //path: path.resolve('src'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: './index.html'
      }
    ])
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['es2015', 'stage-0', 'react'] } },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 3000
  },
  devtool: 'inline-source-map'
}
