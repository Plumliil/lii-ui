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
const selVal=ref('china');
const state = reactive({
  options: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "美国",
      value: "america",
    },
    {
      label: "俄罗斯",
      value: "russia",
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