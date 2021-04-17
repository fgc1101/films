<template>
    <div class="new_detail">
        <nav-bar :title="title"></nav-bar>
        <div class="news-title">
            <p>{{detail_info.title}}</p>
            <div>
                <span>{{detail_info.click_num}}次点击</span>
                <span>分类: 民生经济</span>
                <span>添加时间: 2021年04月17日</span>
            </div>
        </div>
        <div class="news-detail" v-html="detail_info.content">
            <p>哈哈哈</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NewsDetail",
    data(){
      return {
        title:'新闻详情',
        detail_info: {},
      }
    },
    created() {
      console.log(this.$route.params)
      let { id } = this.$route.params
      this.$axios.get('/api/index/newsDetail/'+id).then(res=>{
        console.log(res);
        this.detail_info = res.data.data;
      })

    }
  }
</script>

<style lang="less" scoped>
    .news-title p {
        color: #0a87f8;
        font-size: 20px;
        font-weight: bold;
    }

    .news-title span {
        margin-right: 30px;
    }

    .news-title {
        margin-top: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }


    /*主体文章的左右距离*/

    .news-content {
        padding: 10px 5px;
    }

</style>
