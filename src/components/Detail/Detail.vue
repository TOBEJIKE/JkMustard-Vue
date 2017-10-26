<template>
  <div class="detail">
    <div class="detail-nav">
      <div class="detail-back" @click="backClick"></div>
      <p>新闻详情</p>
    </div>
    <iframe :src="mUrl" frameborder="0" :height="frameHeight"></iframe>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        frameHeight: 0,
        mUrl: ''
      }
    },
    mounted () {
      this.mUrl = this.$route.params.mUrl
      this.frameHeight = window.innerHeight
    },
    methods: {
      backClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail
    .detail-nav
      position fixed
      top -1px
      height 1.32666667rem
      line-height 1.32666667rem
      background-color #3466f6
      width 100%
      text-align center
      z-index 99
      .detail-back
        position absolute
        height .32666667rem
        width .32666667rem
        border-bottom 1px solid #fff
        border-left 1px solid #fff
        transform rotate(45deg)
        top .4666667rem
        left .6666666rem
      p
        color #fff
        font-size .4666667rem
  iframe
    width 100%

</style>