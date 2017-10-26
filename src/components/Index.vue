<template>
  <div class="index">
    <Top-Head :pageIndex="pageIndex" v-on:popupMask="switchMask1" :routes="routes"></Top-Head>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Channel :popupVisible="popupVisible" v-on:switchMask="switchMask"></Channel>
  </div>
</template>

<script type="text/ecmascript-6">
  import Head from './Head/Head.vue'
  import Channel from './Channel/Channel.vue'
  export default {
    data () {
      return {
        popupVisible: false,
        pageIndex: 1,
        routes: []
      }
    },
    // 路由名用于渲染页面head的nav
    mounted () {
      if (window.localStorage.getItem('routesList')) {
        this.routes = JSON.parse(window.localStorage.getItem('routesList'))
      } else {
        this.routes = this.$store.getters.getRoutes
      }
    },
    components: {
      'TopHead': Head,
      'Channel': Channel
    },
    methods: {
      // 传给头部渲染
      switchNum (value) {
        this.pageIndex = value
      },
      // 切换弹出抽屉
      switchMask (arr) {
        this.routes = arr
        this.popupVisible = !this.popupVisible
      },
      // 头部弹出抽屉事件
      switchMask1 (arr) {
        this.routes = arr || []
        this.popupVisible = !this.popupVisible
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index
    .content
      margin-top 1.32666667rem
</style>