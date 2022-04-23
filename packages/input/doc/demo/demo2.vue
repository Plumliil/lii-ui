<template>
    <div class="container">
        <lii-input placeholder="请输入内容..." size="big" />
        <lii-input placeholder="请输入内容..." size="mid" />
        <lii-input placeholder="请输入内容..." size="small" />
    </div>
</template>

<script>
export default {}
</script>

<script setup>
import liiInput from '../../index.vue'
</script>

<style lang='less' scoped>
    .lii-input{
        display: block;
    }
</style>