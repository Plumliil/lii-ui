<template>
  <lii-select :options="options"></lii-select>
</template>

<script>
export default {};
</script>

<script setup>
import liiSelect from "../../index.vue";
import { reactive } from "vue";
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
</script>

<style lang='less' scoped>
</style>