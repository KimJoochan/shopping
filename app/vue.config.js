module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "",
  devServer:  { allowedHosts: 'all', },
  css: {
  	extract: {
    	filename: 'client_shop.min.css'
    },
  },
  configureWebpack: {
    output: {
        filename: 'client_shop.min.js'
    },
    optimization: {
        splitChunks: false
    }
  },
};
