<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar :colorful='colorful'>
      <!-- tab-bar-item可以改造成for循环 -->
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="~@/assets/images/tabbar/index.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/images/tabbar/index-active.svg" alt="">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~@/assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/images/tabbar/category-active.svg" alt="">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/car'>
        <img slot="item-icon" src="~@/assets/images/tabbar/car.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/images/tabbar/car-active.svg" alt="">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="~@/assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/images/tabbar/profile-active.svg" alt="">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  name: 'app',
  data() {
    return {
      colorful: '#666'
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  @import url(assets/css/base.css);
</style>
