<template>
  <div class="lii-radio">
    <div
      class="lii-item-radio"
      v-for="(item, index) in props.options"
      :key="index"
      @click="change(item, index)"
      :class="{ 'lii-item-disabled-radio': item.disabled }"
    >
      <span :class="{ active: currentIndex === index }"></span>
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "liiRadio",
};
</script>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["change"]);
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
const currentIndex = ref(-1);
const change = (item, index) => {
  if (!item.disabled) {
    currentIndex.value = index;
    emits("change", item);
  }
};
</script>

<style lang='less' scoped>
.lii-radio {
  width: 100%;
  height: auto;
  overflow: hidden;
  .lii-item-radio {
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    span {
      width: 14px;
      height: 14px;
      border-radius: 100%;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      background: #fff;
      border: @baseBorder;
      border-color: @text;
      transition: transform 0.15s ease-in;
      margin-right: 5px;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        transition: transform 0.15s ease-in;
      }
      &.active {
        background-color: @primary;
        border: 1px solid @primary;
      }
    }
  }
  .lii-item-disabled-radio {
    cursor: no-drop;
    color: @disabled;
    span {
      border: @baseBorder;
      cursor: no-drop;
      &::after {
        background-color: @disabled;
      }
    }
  }
}
</style>