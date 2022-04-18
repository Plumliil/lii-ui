<template>
  <input type="text" :value="modelValue" @input="input" />
</template>

<script>
export default {
  name: "liiInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: String | Number,
  },
  setup(props, { emit }) {
    const input = (e) => {
    //   console.log('liiInput',e.target.value);
      emit("update:modelValue", e.target.value);
    };
    console.log(emit);
    return {
      input,
    };
  },
};
</script>

<style lang='less' scoped>
// input {
//     height: 300px;
// }
</style>