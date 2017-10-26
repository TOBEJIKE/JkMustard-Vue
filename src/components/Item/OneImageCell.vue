<template>
  <router-link :to="{name: 'detail', params: {mUrl: article_data.mUrl}}">
    <div class="one_item">
      <div class="one_item_content">
        <div class="one_item_text">
          <p class="one_item_title">{{article_data.title}}</p>
          <div class="one_item_tag">
            <div class="one_item_status_div">
              <p class="one_item_status_text">{{article_data.sourceType}}</p>
            </div>
            <p class="one_item_from">{{article_data.fromWhere}}</p>
            <p class="one_item_time">{{displayTime}}</p>
          </div>
        </div>
        <div class="one_item_img">
          <img :src="article_data.wapImageList[0]" style="width: 3.06667rem; height: 2.13333rem">
        </div>
      </div>
      <div class="one_item_line"></div>
    </div>
  </router-link>
  <!--<div class="one_item" @click="showDetail">-->
    <!--<div class="one_item_content">-->
      <!--<div class="one_item_text">-->
        <!--<p class="one_item_title">{{article_data.title}}</p>-->
        <!--<div class="one_item_tag">-->
          <!--<div class="one_item_status_div">-->
            <!--<p class="one_item_status_text">{{article_data.sourceType}}</p>-->
          <!--</div>-->
          <!--<p class="one_item_from">{{article_data.fromWhere}}</p>-->
          <!--<p class="one_item_time">{{displayTime}}</p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="one_item_img">-->
        <!--<img :src="article_data.wapImageList[0]" style="width: 3.06667rem; height: 2.13333rem">-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="one_item_line"></div>-->
  <!--</div>-->
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
  .one_item
    margin 0.26667rem 0.26667rem 0.53333rem
    height 2.13333rem
    .one_item_content
      height 2.13333rem
      display flex
      .one_item_text
        flex 1
        height 2.13333rem
        margin-right 0.13333rem
        .one_item_title
          text-align left
          font-size 0.4266667rem
          color #080808
        .one_item_tag
          display inline-block
          height 0.26667rem
          width 100%
          margin-top 0.9rem
          text-align left
          .one_item_status_div
            height: 0.32rem
            float left
            border:1px solid #FF0000
            border-radius: 0.06667rem
            margin-right 0.133333rem
            .one_item_status_text
              display block
              height 0.32rem
              line-height 0.32rem
              text-align center
              margin-left 3px
              margin-right 3px
              font-size: 0.226667rem
              color #FF0000
          .one_item_from
            display block
            float left
            margin-top 2px
            line-height 0.32rem
            height 0.32rem
            text-align center
            font-size: 0.293333rem
          .one_item_time
            float right
            display block
            margin-top 2px
            line-height 0.32rem
            height 0.32rem
            text-align center
            font-size: 0.293333rem
      .one_item_img
        width 3.06667rem
        height 2.13333rem
    .one_item_line
      height 1px
      background-color #dedede
      margin-top 0.26667rem

</style>