<template>
  <router-view></router-view>
</template>


<script>
export default {};
</script>
<script setup>
</script>


<style lang="less">
html,
body {
  width: 100%;
  margin: 0;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #006699;
  }
}
</style>