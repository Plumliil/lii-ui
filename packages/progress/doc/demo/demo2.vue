<template>
    <lii-progress :percentage="100" :color="customColor"></lii-progress>
    <lii-progress :percentage="80" status="primary" :color="customColor"></lii-progress>
    <lii-progress :percentage="80" status="primary" :color="customColors"></lii-progress>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
  name: '',
}
</script>
<script setup>
import liiProgress from '../../index.vue';
const customColor=ref('#409eff');
const customColors=reactive([
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
]);
console.log(customColors);
</script>

<style lang='less' scoped >
</style>