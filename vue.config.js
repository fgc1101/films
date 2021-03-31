module.exports = {
  devServer: {
    proxy: {
      '/api':{
        target: 'http://www.tp5.com'
      }
    }
  }
}
