<template>
  <div class="lii-radio">
    <div
      class="lii-item-radio"
      v-for="(item, index) in props.options"
      :key="index"
      @click="change(item, index)"
      :class="[
        { 'lii-item-disabled-radio': item.disabled },
        itemRadioState,
        { active: currentIndex === index && fontColor },
      ]"
    >
      <span :class="{ active: currentIndex === index }"></span>
      {{ item[filedLabel] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "liiRadio",
};
</script>

<script setup>
import { computed, ref } from "vue";
const emits = defineEmits(["change"]);
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  inline: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "mid",
  },
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  customColor: {
    type: String,
    default: "#409eff",
  },
  fontColor: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Number,
    default: -1,
  },
});
if (props.checked > props.optionslength + 1) {
  props.checked = 0;
}
const currentIndex = ref(props.checked);
const itemRadioState = computed(() => {
  return {
    "lii-item-inline-radio": props.inline,
    [`lii-item-${props.size}-radio`]: true,
  };
});
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
    display: flex;
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    margin-top: 3px;
    margin-bottom: 3px;
    user-select: none;
    span {
      width: 14px;
      height: 14px;
      border-radius: 100%;
      background-color: #fff;
      position: relative;
      cursor: pointer;
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
        background-color: v-bind("props.customColor");
        border: 1px solid v-bind("props.customColor");
      }
    }
    &.active {
      color: v-bind("props.customColor");
      span {
        background-color: v-bind("props.customColor");
        border: 1px solid v-bind("props.customColor");
      }
    }
  }
  .lii-item-big-radio {
    font-size: 16.8px;
    line-height: 24px;
    span {
      width: 16.8px;
      height: 16.8px;
      margin-top: 3px;
      &::after {
        width: 4.8px;
        height: 4.8px;
        margin: -2.4px 0 0 -2.4px;
      }
    }
  }
  .lii-item-mid-radio {
    transform: scale(100%);
  }
  .lii-item-small-radio {
    font-size: 9.8px;
    line-height: 16px;
    span {
      width: 9.8px;
      height: 9.8px;
      margin-top: 3px;
      &::after {
        width: 2.8px;
        height: 2.8px;
        margin: -1.4px 0 0 -1.4px;
      }
    }
  }
  .lii-item-inline-radio {
    display: inline-flex;
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