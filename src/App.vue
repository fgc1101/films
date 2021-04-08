<template>
  <div id="app">
    <mt-header title="首页"></mt-header>
    <router-view/>
    <!--
      <test/>
     -->
    <!-- 底部导航 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./static/images/footer_bar/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="./static/images/footer_bar/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="ShopCart">
        <img slot="icon" src="./static/images/footer_bar/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="./static/images/footer_bar/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  },
  components: {
  },
  created() {
  },
  watch:{
    selected:function(val,oldVal){
      this.$router.push({
        name:val
      })
      console.log('new: %s, old: %s', val, oldVal)
    }
  }
}
</script>

<style scoped>
  .mint-tabbar {
    position: fixed;
    bottom: 0;
  }
</style>
