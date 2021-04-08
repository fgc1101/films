module.exports = {
  devServer: {
    proxy: {
      '/api':{
        target: 'http://www.tp5.com'
      }
    }
  },
  configureWebpack:{
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
      }
    }
  }
}
