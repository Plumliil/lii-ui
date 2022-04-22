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
      name: "选项一",
      id: "0",
    },
    {
      name: "选项二",
      id: "1",
    },
    {
      name: "选项三",
      id: "2",
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