// const path = require("path");

// Default config
module.exports = {
  devServer: {
    port: process.env.NODE_PORT,
    disableHostCheck: process.env.NODE_ENV === "development",
    watchOptions: {
      poll: true
    },
    public: `${process.env.VUE_APP_DOMAIN}`
  },

  css: {
    sourceMap: process.env.NODE_ENV === "development"
  },

  productionSourceMap: process.env.NODE_ENV === "development"

  // configureWebpack: {
  //   entry: '@/src/main.js',
  // }
};
