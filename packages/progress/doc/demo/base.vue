<template>
    <lii-progress :percentage="100"></lii-progress>
    <lii-progress :percentage="80" status="primary"></lii-progress>
    <lii-progress :percentage="60" status="success"></lii-progress>
    <lii-progress :percentage="40" status="warning"></lii-progress>
    <lii-progress :percentage="20" status="error"> </lii-progress>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: '',
}
</script>
<script setup>
import liiProgress from '../../index.vue';
const percentage=ref(10);
</script>

<style lang='less' scoped >
</style>