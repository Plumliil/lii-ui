<template>
  <lii-collaps :value="activeNames">
    <lii-collaps-item title="part 1" name="1">
      <div>111111111111111111</div>
      <div>222222222222222222</div>
    </lii-collaps-item>
    <lii-collaps-item title="part 2" name="2">
      <div>111111111111111111</div>
      <div>222222222222222222</div>
    </lii-collaps-item>
    <lii-collaps-item title="part 3" name="3">
      <div>111111111111111111</div>
      <div>222222222222222222</div>
    </lii-collaps-item>
  </lii-collaps>
</template>

<script setup>
import liiCollapse from "../../..///collapse/index.vue";
import liiCollapseItem from "../../..///collapse/indexItem.vue";
const activeNames=''
</script>

<style lang='less' scoped>
</style>