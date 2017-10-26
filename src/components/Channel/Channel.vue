<template>
  <mt-popup v-model="popupVisible" position="right" class="mint-popup" :modal="false">
    <div class="tunnels" @touchmove.prevent>
      <header>
        <div class="back" @click="switchMask"></div>
        <p>频道定制</p>
      </header>
      <div class="content">
        <div class="subscribed">
          <draggable v-model="subscribedArr" :move="onMove" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
            <transition-group>
              <channel-cell class="channel-cell"
                            @click=" element.fixed=! element.fixed"
                            aria-hidden="true"
                            v-for="(item,index) in subscribedArr"
                            :key="index"
                            :item="item"
                            :data-index="index"
                            @click.native="deleteTunnel">
              </channel-cell>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </mt-popup>
</template>

<script type="text/ecmascript-6">
  import channelCell from '../Item/ChannelCell.vue'
  import draggable from 'vuedraggable'
  export default {
    mounted () {
      // 取出store数据
      if (window.localStorage.getItem('routesList')) {
        let arr = JSON.parse(window.localStorage.getItem('routesList'))
        arr.splice(0, 1)
        this.subscribedArr = arr
      } else {
        this.subscribedArr = this.$store.state.subscribed
      }
      this.noSubscribedArr = this.$store.state.noSubscribed
    },
    props: ['popupVisible'],
    data () {
      return {
        // 订阅
        subscribedArr: [],
        // 未订阅
        noSubscribedArr: [],
        isDragging: false,
        delayedDragging: false,
        editable: true
      }
    },
    methods: {
      // 向父组件传回
      switchMask () {
        let oRoute = this.$store.getters.getRoutes
        this.$emit('switchMask', oRoute)
      },
      // 添加订阅频道
      addTunnel () {
//        let index = event.currentTarget.dataset.index
//        this.$store.dispatch('add_subscribed', index)
//        this.subscribedArr = this.$store.state.subscribed
      },
      // 删除订阅频道
      deleteTunnel () {
//        let index = event.currentTarget.dataset.index
//        this.$store.dispatch('delete_subscribed', index)
      },
      // api 控制元素
      onMove ({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element
        const draggedElement = draggedContext.element
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      }
    },
    watch: {
      isDragging (newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        // 进入下一个拖拽区域
        this.$nextTick(() => {
          this.delayedDragging = false
          // 刷新store
          let temp_subscribedArr = this.subscribedArr
          let temp_NoSubscribedArr = this.noSubscribedArr
          this.$store.dispatch('update_all', { temp_subscribedArr, temp_NoSubscribedArr })
        })
      }
    },
    computed: {
      dragOptions () {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost'
        }
      }
    },
    components: {
      channelCell,
      draggable
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-popup
    width 100%
    height 100%
    background-color #fff
    .tunnels
      header
        position fixed
        top -1px
        height 1.32666667rem
        line-height 1.32666667rem
        background-color #3466f6
        width 100%
        text-align center
        z-index 99
        p
          color #fff
          font-size .4666667rem
        .back
          position absolute
          height .32666667rem
          width .32666667rem
          border-bottom 1px solid #fff
          border-left 1px solid #fff
          transform rotate(45deg)
          top .4666667rem
          left .6666666rem
      .content
        overflow-y scroll
        padding-top 0.5rem
        background-color #ffffff
        height 100vh
        .no-subscribed
          padding-bottom 5rem
        .subscribed
        .no-subscribed
          margin-bottom .16666666rem
          &:after
            content ''
            display table
            visibility hidden
            clear both
          .channel-cell
            position relative
            float left
            margin .13333rem
            .tunnel__add
              position absolute
              color #3466f6
              top 0rem
              right 0rem
              margin .0666777rem .0666777rem
              line-height .4rem
              font-size .666667rem
              font-weight 300
          .subscribed__header
            height .666667rem
            line-height .666667rem
            color #333
            .title
              float left
              font-size .366667rem
              margin-left .13333rem
            .desc
              float right
              font-size .2rem
              opacity .6
              margin-right .13333rem
            &:after
              content ''
              display table
              visibility hidden
              clear both
</style>