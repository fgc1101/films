<template>
    <div>
        <nav-bar :title="title"/>

        <div class="demo">
            <ul>
                <li v-for="(item,index) in newsList" :key="index">
                    <router-link :to="{ name:'NewsDetail', params:{id:item.id}}">
                        <img :src="item.img_url" alt="">
                        <div>
                            <span>{{item.title}}</span>
                            <div class="news-desc">
                                <p class="float-left">点击数:{{item.click_num}}</p>
                                <p class="float-right">发表时间:{{item.create_time}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

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
    },
    created() {
      this.$axios.get('/api/index/newsList').then((res)=>{
        this.newsList = res.data.data
      })
    }
  }
</script>

<style lang="less" scoped>

    .demo {
        a {
            height: 60px;
            color: #000;
            div {
                float: left;
                width: 250px;
                margin-right: 20px;
            }

            p {
                color: #0bb0f5;
                font-size: 12px;
                line-height: 12px;
                .float-left{
                    width: 100px;
                    float: left;
                }
                .float-right{
                    float: right;
                }
            }
        }
        img {
            float: left;
            height:60px;
            width: 60px;
            margin-right: 20px;
        }

        ul li{
            padding: 0 10px;
        }
        .demo ul {
            padding: 0;
        }

    }
</style>
