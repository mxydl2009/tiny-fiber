const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: "node",
  mode: "development",
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // 不打包node_modules中的模块，因为服务端不需要，只有客户端才需要
  externals: [nodeExternals()]
}