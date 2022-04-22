<template>
  <lii-radio :options="options" @change="change"></lii-radio>
</template>

<script>
export default {};
</script>

<script setup>
import { reactive } from "vue";
import liiRadio from "../../index.vue";
const state = reactive({
  options: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "美国",
      value: "america",
      disabled:true
    },
    {
      label: "俄罗斯",
      value: "russia",
    },
  ],
});
const { options } = state;
const change=(v)=>{
  console.log(v);
}
</script>

<style lang='less' scoped>
</style>