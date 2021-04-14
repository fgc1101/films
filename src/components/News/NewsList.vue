<template>
    <div>
        <nav-bar :title="title"/>
    </div>
</template>

<script>
  export default {
    name: "NewsList",
    data(){
      return {
        title:'新闻列表',
        newsList:[],// 新闻列表数据
      }
    }
  }
</script>

<style scoped>

</style>
