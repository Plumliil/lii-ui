<template>
  <div class="demo1">
    <lii-badge value="new" class="item">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="hots" class="item">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="热门" class="item">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
  </div>
</template>

<script>
  import {
    ref
  } from '@vue/reactivity';
  export default {
    name: '',
  }
</script>
<script setup>
  import liiBadge from '../../index.vue';
</script>

<style lang='less' scoped>
  .demo1{
    display: flex;
  }
</style>