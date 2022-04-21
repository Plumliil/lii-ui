<template>
  <lii-select
    :options="options"
    filedLabel="name"
    filedValue="id"
    @change="getSelect"
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
    },
    {
      name: "俄罗斯",
      id: "russia",
    }
  ],
});
const { options } = state;
const getSelect = (v) => {
  console.log(v);
};
</script>

<style lang='less' scoped>
</style>