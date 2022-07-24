<template>
    <div>
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
const PARENT_PROVIDE='parentProvide';
provide(PARENT_PROVIDE,props);
</script>

<style lang='less' scoped >
*{
    margin: 0;
    padding: 0;
}
</style>