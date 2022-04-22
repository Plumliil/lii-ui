<template>
  <lii-select
    :options="options"
    v-model="selVal"
    @change="change"
  ></lii-select>
</template>

<script>
export default {};
</script>

<script setup>
import liiSelect from "../../index.vue";
import { reactive, ref } from "vue";
const selVal=ref('0');
const state = reactive({
  options: [
    {
      label: "选项一",
      value: "0",
    },
    {
      label: "选项二",
      value: "1",
    },
    {
      label: "选项三",
      value: "2",
    }
  ],
});
const { options } = state;
const change=(e)=>{
  console.log(selVal.value);
}
</script>

<style lang='less' scoped>
</style>