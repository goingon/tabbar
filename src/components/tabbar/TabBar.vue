<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 49px;
    box-shadow: 0 -1px 5px rgba(100, 100, 100, .2);
  }
</style>
