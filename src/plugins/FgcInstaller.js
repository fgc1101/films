function FgcInstall(){

}

FgcInstall.install = function(Vue){
  // console.log(Vue)
  console.log("我是范国超写的插件！");


  Vue.component('test',{
    template: `<h1>FgcInstall插件中生成的Test组件</h1>`
  })

  let log = function(){
    console.log("我们自己插件的log函数");
  }

  Object.defineProperty(Vue.prototype,'$log',{
    set :function(){
      console.log("你做梦");
    },
    get : function(){
      return log
    }
  })

}

export default FgcInstall

