<template>
  <div class="tab-bar-item" @click="showPage">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class='{active: isActive}'>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    colorful: String
  },
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    }
  },
  methods: {
    showPage() {
      // console.log(this.path)
      // console.log(this.$route)
      // console.log(this.$router)
      if(this.$route.path === this.path){
        console.log('不可以重复点')
        return false;
      }
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
  .tab-bar-item img {
    margin-top: 4px;
    margin-bottom: 2px;
    height: 24px;
    width: 24px;
    vertical-align: bottom;
  }
  .active {
    color: red;
  }
</style>
