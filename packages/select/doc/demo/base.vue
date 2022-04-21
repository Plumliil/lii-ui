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
</script>

<style lang='less' scoped>
</style>