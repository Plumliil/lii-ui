<template>
  <div class="base">
    <div>
      <lii-loading class="loader" :isLoading="true" type="loader-two" size="small"></lii-loading>
      <lii-loading class="loader" :isLoading="true" type="loader-three" size="small"></lii-loading>
      <lii-loading class="loader" :isLoading="true" value="Loading..." type="loader-four" size="small"></lii-loading>

    </div>
    <div>
    </div>
    <div>
      <lii-loading class="cube" :isLoading="true" type="loader-five" size="small"></lii-loading>
    </div>
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
  import liiLoading from '../../index.vue';
</script>

<style lang='less' scoped>
  .base {

    // background-color: #383d52;
    div {
      display: flex;

      lii-loading {
        border: @baseBorder;
        background-color: aqua;
      }
    }
    .cube{
      padding: 5px;
    }
  }


  .item {
    margin: 5px 0;
  }
</style>