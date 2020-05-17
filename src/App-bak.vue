<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/index.svg" alt="">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/category.svg" alt="">
        <span slot="item-text">分类</span></tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/car.svg" alt="">
        <span slot="item-text">购物车</span></tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/profile.svg" alt="">
        <span slot="item-text">我的</span></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'
  export default {
    name: 'APP',
    data() {
      return {

      }
    },
    components: {
      TabBar,
      TabBarItem
    },
    methods: {

    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>
