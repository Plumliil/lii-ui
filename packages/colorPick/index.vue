<template>
    <div class="colorPick">
        
    </div>
</template>

<script>
import { provide } from '@vue/runtime-core';
import { ref } from 'vue';
export default {
  name: 'liiColorPick',
}
</script>
<script setup>
const props=defineProps({
    value:{
        type:Array,
        default:[]
    }
})
</script>

<style lang='less' scoped >
.colorPick {
    width: 300px;
    height: 300px;
  /* 色相：从左到右依次为 红、黄、绿、青、蓝、洋红，等分渐变 */
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}

</style>