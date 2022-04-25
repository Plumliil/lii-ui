<template>
    <button @click="showMessage">显示弹框</button>
</template>

<script>
export default {}
</script>

<script setup>
import Message from '../../index'
const showMessage=()=>{
    Message();
}
</script>

<style lang='less' scoped>
</style>