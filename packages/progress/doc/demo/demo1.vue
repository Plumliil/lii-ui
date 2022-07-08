<template>
    <lii-progress :percentage="percentage">
    </lii-progress>
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
const timer=setInterval(()=>{
    if(percentage.value===100){
        return 
    }
    percentage.value++
    console.log(percentage.value);
},100)
</script>

<style lang='less' scoped >
</style>