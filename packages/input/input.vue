<template>
  <input class="lii-input" type="text" :value="modelValue" @input="input" />
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
      // console.log('e.target.value',e.target.value);
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
.lii-input {
  height: 25px;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  border: 1px solid black;
}
</style>