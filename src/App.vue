<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>

    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 底部导航 -->
    <mt-tabbar>
      <mt-tab-item id="外卖">
        <img slot="icon" src="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
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
    // 为给定 ID 的 user 创建请求
    this.$axios.get('/api/basic/menu')
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
  }
}
</script>

<style>

</style>
