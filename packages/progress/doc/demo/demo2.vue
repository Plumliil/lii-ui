<template>
    <lii-progress :percentage="100" :color="customColor"></lii-progress>
    <lii-progress :percentage="80" status="primary" :color="customColor"></lii-progress>
    <lii-progress :percentage="perchange" status="primary" :colors="customColors"></lii-progress>
    <button @click="add">+10</button>
    <button @click="sub">-10</button>
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
const perchange=ref(0)
// setInterval(()=>{
//   if(perchange.value<100){
//     perchange.value++
//   }
//   console.log(perchange.value);
// },1000)
const add=()=>{
  perchange.value+=10
}
const sub=()=>{
  perchange.value-=10
}
</script>

<style lang='less' scoped >
</style>