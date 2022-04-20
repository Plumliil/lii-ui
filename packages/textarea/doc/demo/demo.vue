<template>
  <lii-textarea
    v-model="val"
    @input="setVal"
    :cols="40"
    :rows="4"
    :resize="false"
    :maxlength="10"
    placeholder="请输入..."
  ></lii-textarea>
</template>

<script>
export default {};
</script>

<script setup>
import { ref } from "vue";
import liiTextarea from "../../textarea.vue";
const val = ref("");
const setVal = (e) => {
  val.value = e.target.value;
  console.log(e.target.value);
};
</script>

<style lang='less' scoped>
</style>