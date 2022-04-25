<template>
  <lii-radio
    :options="options"
    :checked="0"
    customColor="red"
    :fontColor="true"
  ></lii-radio>
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
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options } = state;
</script>

<style lang='less' scoped>
</style>