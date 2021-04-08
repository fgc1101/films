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
        <div class="sudoku_row">
            <div class="sudoku_item" :class="curSelect==sudoku.id ? 'opacity':''" v-for="(sudoku,index) in sudokus" :key="index" @touchstart="touchstart" @touchend="touchend">
                <router-link :to="sudoku.route">
                    <img :src="sudoku.img_src" width="40" height="40" >
                </router-link>
                {{sudoku.name}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        bannerList : [],
        sudokus:[],
        curSelect:null
      }
    },
    created() {
      this.$axios.get("/api/index/bannerLists").then((res) => {
        console.log(res);
        this.bannerList = res.data.data
        console.log(this.bannerList);
      });

      this.$axios.get("/api/index/gridList").then((res)=>{
        console.log(res)
        this.sudokus = res.data.data
      })
    },
    methods:{
      touchstart:function(e){
        var that = this;
        var id = parseInt(e.currentTarget.id), list = that.sudokus;
        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
            that.curSelect = i;
          }
        }
        setTimeout(function(){
        },200)
      },
      touchend:function(){
        var that = this;
        that.curSelect = null;
      },

    }
  }
</script>

<style scoped>
    .swipe_my{
        margin-top: 40px;
        height: 180px;
    }
    *{
        margin: 0px;
        padding: 0px;
    }
    .sudoku_row{
        display: flex;
        align-items: center;
        width:100%;
        flex-wrap: wrap;
    }
    .sudoku_item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:33.33%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .opacity{
        opacity: 0.4;
        background: #e5e5e5;
    }
    .sudoku_item img{
        margin-bottom: 3px;
        display: block;
    }
</style>
