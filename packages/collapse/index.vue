<template>
    <div ref="collapseRoot" @itemClick="itemClick">
        <slot>

        </slot>
    </div>
</template>

<script>
import { provide } from '@vue/runtime-core';
import { ref } from 'vue';
export default {
  name: 'liiCollapse',
}
</script>
<script setup>
const props=defineProps({
    value:{
        type:Array,
        default:[]
    }
})
const collapseRoot=ref(null);
const PARENT_PROVIDE='parentProvide';
console.log(props);
provide(PARENT_PROVIDE,props);
const itemCLick=(v)=>{
    console.log(v);
    console.log(11);
}
</script>

<style lang='less' scoped >
</style>