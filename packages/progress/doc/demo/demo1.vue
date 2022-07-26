<template>
    <lii-progress :textInside="true" :percentage="100" color="red"></lii-progress>
    <lii-progress :width="200" :textInside="true" :percentage="80" status="primary"></lii-progress>
    <lii-progress :textInside="true" :percentage="60" status="success"></lii-progress>
    <lii-progress :textInside="true" :percentage="40" status="warning"></lii-progress>
    <lii-progress :textInside="true" :percentage="20" status="error"></lii-progress>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: '',
}
</script>
<script setup>
import liiProgress from '../../index.vue';
</script>

<style lang='less' scoped >
</style>