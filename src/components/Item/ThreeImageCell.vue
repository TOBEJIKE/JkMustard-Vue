<template>
  <router-link :to="{name: 'detail', params: {mUrl: article_data.mUrl}}">
    <div class="three_item">
      <p class="three_item_title">{{article_data.title}}</p>
      <div class="three_item_images">
        <div class="test">
          <img :src="article_data.wapImageList[0]" style="width: 3.06667rem; height: 2.13333rem">
        </div>
        <div class="empty"></div>
        <div class="test">
          <img :src="article_data.wapImageList[1]" style="width: 3.06667rem; height: 2.13333rem">
        </div>
        <div class="empty"></div>
        <div class="test">
          <img :src="article_data.wapImageList[2]" style="width: 3.06667rem; height: 2.13333rem">
        </div>
      </div>
      <div class="three_item_tag cleanFix">
        <div class="three_item_status_div">
          <p class="three_item_status_text">{{article_data.sourceType}}</p>
        </div>
        <p class="three_item_from">{{article_data.fromWhere}}</p>
        <p class="three_item_time">{{displayTime}}</p>
      </div>
      <div class="three_item_line"></div>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['article_data'],
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
  .three_item
    margin 0.26667rem 0.26667rem 0.53333rem
    .three_item_title
      text-align left
      font-size 0.4266667rem
      color #080808
    .three_item_images
      height 2.13333rem
      margin-top 10px
      display flex
      .test
        width 3.06667rem
        height 2.13333rem
      .empty
        flex 1
    .three_item_tag
      display inline-block
      height 0.4rem
      width 100%
      margin-top 0.2rem
      text-align left
      .three_item_status_div
        height: 0.32rem
        float left
        border:1px solid #FF0000
        border-radius: 0.06667rem
        margin-right 0.133333rem
        .three_item_status_text
          display block
          height 0.32rem
          line-height 0.32rem
          text-align center
          margin-left 3px
          margin-right 3px
          font-size: 0.226667rem
          color #FF0000
      .three_item_from
        display block
        float left
        margin-top 2px
        line-height 0.32rem
        height 0.32rem
        text-align center
        font-size: 0.293333rem
      .three_item_time
        float right
        display block
        margin-top 2px
        line-height 0.32rem
        height 0.32rem
        text-align center
        font-size: 0.293333rem
    .cleanFix
      overflow: hidden
      _zoom:1
    .three_item_line
      margin-top 10px
      height 1px
      background-color #dedede

    /*.clearfix*/
      /*overflow: hidden*/
      /*_zoom:1*/
</style>