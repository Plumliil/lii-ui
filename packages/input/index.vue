<template>
  <input
    :class="liiInputClass"
    type="text"
    :value="modelValue"
    @input="input"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "liiInput",
};
</script>

<script setup>
import { computed } from "vue";
const props = defineProps({
  disabled: Boolean,
  modelValue: String | Number,
  placeholder: {
    type: String,
    default: "请输入...",
  },
  size: {
    type: String,
    default: "mid",
  },
});
const emits = defineEmits(["update:modelValue"]);
const liiInputClass = computed(() => {
  let iptClass = {
    "lii-input": true,
    "lii-input--disabled": props.disabled,
    ["lii-" + props.size + "-input"]: true,
  };
  return iptClass;
});
const input = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>
<style lang='less'>
.lii-input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 250px;
  margin: 3px;
  cursor: pointer;
  &:hover {
    border-color: @info;
  }
  &:focus {
    border-color: @primary;
  }
  &::placeholder {
    font-size: 14px;
    color: #aeafb3;
  }
  &.lii-big-input {
    width: 300px;
    height: 48px;
    padding: 0 18px;
    &::placeholder {
      font-size: 16.8px;
    }
  }
  &.lii-mid-input {
    transform: scale(1);
  }
  &.lii-small-input {
    width: 175px;
    height: 28px;
    line-height: 20px;
    padding: 0 10.5px;
    &::placeholder {
      font-size: 9.8px;
    }
  }
}
.lii-input--disabled {
  &:hover {
    border-color: #dcdfe6;
  }
  cursor: no-drop;
}
</style>