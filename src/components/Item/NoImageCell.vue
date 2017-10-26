<template>
  <router-link :to="{name: 'detail', params: {mUrl: article_data.mUrl}}">
    <div class="item_content">
      <p class="item_title">{{article_data.title}}</p>
      <div class="item_tag">
        <div class="item_status_div">
          <p class="item_status_text">{{article_data.sourceType}}</p>
        </div>
        <p class="item_from">{{article_data.fromWhere}}</p>
        <p class="item_time">{{displayTime}}</p>
      </div>
      <div class="item_line"></div>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [
      'article_data'
    ],
    data () {
      return {
        displayTime: ''
      }
    },
    mounted () {
      var Time = this.article_data.displayTime
      this.displayTime = Time.substring(5, 16)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // .4666667rem 35px
  .item_content
    padding 0.133333rem 0.2666667rem 0
    .item_title
      text-align left
      font-size: 0.4266667rem
      color #080808
    .item_tag
      margin-top 0.1666667rem
      .item_status_div
        height: 0.32rem
        float left
        border:1px solid #FF0000
        border-radius: 0.06667rem
        margin-right 0.133333rem
        .item_status_text
          display block
          height 0.32rem
          line-height 0.32rem
          text-align center
          margin-left 3px
          margin-right 3px
          font-size: 0.226667rem
          color #FF0000
      .item_from
        display block
        float left
        margin-top 1px
        line-height 0.32rem
        height 0.32rem
        text-align center
        font-size: 0.293333rem
      .item_time
        float right
        display block
        margin-top 1px
        line-height 0.32rem
        height 0.32rem
        text-align center
        font-size: 0.293333rem
    .item_line
      margin-top 0.7rem
      height 1px
      background-color #dedede
</style>