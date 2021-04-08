<template>
    <div>
        <div class="swipe_my">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                    <img :src="item.img" alt="" width="100%" height="100%">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <!-- 九宫格 -->
        <grid/>


    </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        bannerList : [],
      }
    },
    created() {
      this.$axios.get("/api/index/bannerLists").then((res) => {
        this.bannerList = res.data.data
      });
    },
    methods:{
    }
  }
</script>

<style scoped>
    .swipe_my{
        height: 200px;
    }
</style>
