<template>
  <lii-radio :options="options" ></lii-radio>
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
      label: "选项一",
      value: 1,
    },
    {
      label: "选项二",
      value: 2,
    },
    {
      label: "选项三",
      value: 3,
    },
  ],
});
const { options } = state;
</script>

<style lang='less' scoped>
</style>