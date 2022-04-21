<template>
  <lii-select
    :options="options"
    filedLabel="name"
    filedValue="id"
  ></lii-select>
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
      name: "中国",
      id: "china",
    },
    {
      name: "美国",
      id: "america",
      disabled: true,
    },
    {
      name: "俄罗斯",
      id: "russia",
    }
  ],
});
const { options } = state;
</script>

<style lang='less' scoped>
</style>