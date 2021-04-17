const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/common/global.less')
      ]
    }
  },
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
