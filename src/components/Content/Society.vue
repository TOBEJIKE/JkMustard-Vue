
<!--社会society-->
<template>
  <div class="recommend"
       ref="wrapper"
       :style="{ height: wrapperHeight + 'px' }" >
    <v-loadmore :top-method="loadTop"
                @translate-change="translateChange"
                @top-status-change="handleTopChange"
                :bottom-method="loadBottom"
                @bottom-status-change="handleBottomChange"
                :bottom-all-loaded="allLoaded"
                ref="loadmore">
      <ul>
        <li v-for="article_data in dataArr">
          <div v-if="article_data.wapImageList.length==0">
            <NoImageCell :article_data="article_data"></NoImageCell>
          </div>
          <div v-else-if="article_data.wapImageList.length==1||article_data.wapImageList.length==2">
            <OneImageCell :article_data="article_data"></OneImageCell>
          </div>
          <div v-else>
            <ThreeImageCell :article_data="article_data"></ThreeImageCell>
          </div>
        </li>
      </ul>

      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>
    </v-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import NoImageCell from '../Item/NoImageCell.vue'
  import OneImageCell from '../Item/OneImageCell.vue'
  import ThreeImageCell from '../Item/ThreeImageCell.vue'
  import {Loadmore} from 'mint-ui'
  export default {
    data () {
      return {
        dataArr: [],
        pageNo: 1,
        pageSize: 10,
        allLoaded: false,
        scrollMode: 'auto',
        loading:false,
        bottomStatus: '',
        wrapperHeight: 0,
        topStatus: '',
        translate: 0,
        moveTranslate: 0
      }
    },
    mounted () {
      this.loadPageList()
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    },
    components: {
      'NoImageCell': NoImageCell,
      'OneImageCell': OneImageCell,
      'ThreeImageCell': ThreeImageCell,
      'v-loadmore': Loadmore
    },
    methods: {
      loadTop:function () {
        setTimeout(() => {
          this.loadPageList()
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      },
      loadBottom:function () {
        setTimeout(() => {
          this.more()
          this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      },
      loadPageList:function () {
        this.$http.post('http://m.chinabyte.com/article/jiemo/list.do', {'classify':'society', 'pageNo':1, 'pageSize':this.pageSize}).then((response) => {
          if (response.data.code === 200) {
            console.log('------推荐----------')
            console.log(response.data.result.articleWapList)
            this.dataArr = response.data.result.articleWapList
            this.scrollMode = 'touch'
            this.pageNo = 2
          }
        })
      },
      more:function () {
        this.$http.post('http://m.chinabyte.com/article/jiemo/list.do', {'classify':'society', 'pageNo':this.pageNo, 'pageSize':this.pageSize}).then((response) => {
          if (response.data.code === 200) {
            console.log('------推荐----------')
            console.log(response.data.result.articleWapList)
            this.dataArr = this.dataArr.concat(response.data.result.articleWapList)
            this.scrollMode = 'touch'
            this.pageNo += 1
          }
        })
      },
      handleTopChange (status) {
        this.moveTranslate = 1
        this.topStatus = status
      },
      translateChange (translate) {

      },
      handleBottomChange (status) {
        this.bottomStatus = status
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .recommend
    overflow: scroll
    .mint-loadmore-top
      span
        display: inline-block
        vertical-align: middle
        -webkit-transition: .2s linear
        transition: .2s linear
        .is-rotate
          -webkit-transform: rotate(180deg)
          transform: rotate(180deg)
    .mint-loadmore-bottom
      span
        display: inline-block
        -webkit-transition: .2s linear
        transition: .2s linear
        vertical-align: middle
        .is-rotate
          -webkit-transform: rotate(180deg)
          transform: rotate(180deg)
</style>