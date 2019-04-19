const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: '../src/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'wd.test.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "inline-cheap-module-source-map",
  externals: [nodeExternals()]
}