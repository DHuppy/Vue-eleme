<template>
  <div>
   <v-header :seller="seller"></v-header>
   <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
   </div>
   <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('data.json').then((response) => {    // 当前目录（dist）下的data.json  跟index.html同级
        this.seller = response.data.seller
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom:1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))

  .tab-item
      flex: 1
      text-align: center
      & > a   //父元素下的a标签
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)    //层次缩进  
</style>
