<template>
  <div class="head">
    <div class="head__tunnels">
      <router-link v-for="route in routes" :key="route.id" :to="route.url" class="head__tunnel">
        {{route.name}}
      </router-link>
    </div>
    <div class="head__add" @click="popupMask">+</div>
    <div class="hr"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['routes'],
    methods: {
      popupMask () {
        this.$emit('popupMask')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    position fixed
    top 0
    z-index 99
    height 1.32666667rem
    line-height 1.32666667rem
    background-color #3466f6
    display flex
    width 100%
    .hr
      width: 100%
      height: 5px
      background-color #3466f6
      position absolute
      z-index: 9999
      bottom 0
    .head__add
      text-align center
      flex 1
      color #fff
      font-size .76667rem
      font-weight 300
    .head__tunnels
      flex 9
      overflow-x scroll
      overflow-y hidden
      text-align center
      white-space nowrap
      .head__tunnel
        display inline
        padding 0 .206667rem 0 .406667rem
        font-size .4666667rem
        color #aabefa
      .router-link-active
        color #fff
  a:hover
    text-decoration none
</style>