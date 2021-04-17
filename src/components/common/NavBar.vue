<template>
    <div class="tmpl">
        <mt-header :title="title">
            <div @click="goBack" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
  export default {
    name: "nav-bar",
    props:['title'],
    created(){
      // 在这里使用this.title
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>
    .tmpl mt-header{
        background-color: #C7C7C7;
    }
</style>
