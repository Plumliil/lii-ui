<template>
  <lii-badge value="12" class="item">
    <lii-button size="mids">标记</lii-button>
  </lii-badge>
  <lii-badge value="12" class="item">
    <lii-button size="small">标记</lii-button>
  </lii-badge>
  <lii-badge value="12" class="item">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
  <lii-badge value="1" class="item">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
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

</style>