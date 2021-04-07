<template>
  <div id="app">
    <mt-header fixed title="首页"></mt-header>
    <router-view/>

    <!-- 底部导航 -->
    <mt-tabbar fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="./static/images/footer_bar/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="./static/images/footer_bar/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="./static/images/footer_bar/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="查找">
        <img slot="icon" src="./static/images/footer_bar/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created() {
  }
}
</script>

<style scoped>

</style>
