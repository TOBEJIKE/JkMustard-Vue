<template>
  <div class="channel-cell">
    <slot></slot>
    <p>{{item.name}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['item']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .channel-cell
    width 2rem
    height 1rem
    background-color #ffffff
    border #C21F39 solid 1px
    border-radius 1rem
    p
      display block
      height 1rem
      line-height 1rem
      font-size 0.5rem
      text-align center
</style>