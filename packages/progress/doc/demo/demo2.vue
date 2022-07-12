<template>
    <lii-progress :percentage="70" color="pink"></lii-progress>
    <lii-progress :percentage="35" color="red"></lii-progress>
    <lii-progress :percentage="17.5" color="black"></lii-progress>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
  name: '',
}
</script>
<script setup>
import liiProgress from '../../index.vue';
</script>

<style lang='less' scoped >
</style>