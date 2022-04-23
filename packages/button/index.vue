<template>
  <button type="button" class="lii-button" :class="liiClass">
    <span><slot>默认按钮</slot></span>
  </button>
</template>

<script>
export default {
  name: "liiButton",
};
</script>
<script setup>
import { computed, useAttrs } from "vue";
const $attrs = useAttrs();
const props = defineProps({
  type: {
    type: String,
    validator(value) {
      const typeArr = ["primary", "success", "info", "warning", "danger"];
      return typeArr.includes(value);
    },
  },
});
const liiClass = computed(() => {
  let btnClassArr = ["lii-button--" + props.type];
  if ("size" in $attrs) btnClassArr.push(`lii-${$attrs.size}-button`);
  if ("disabled" in $attrs) btnClassArr.push("is-disabled");
  if ("plain" in $attrs) btnClassArr.push("is-plain");
  if ("round" in $attrs) btnClassArr.push("is-round");
  if ("circle" in $attrs) btnClassArr.push("is-circle");
  return btnClassArr;
});
</script>
<style lang='less' scoped>
.lii-button {
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  background-color: #ffffff;
  outline: none;
  padding: 12px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  transition: 0.1s;
  text-align: center;
  font-size: 14px;
  margin: 5px;
  &.lii-big-button {
    padding: 14.4px 24px;
    font-size: 16.8px;
  }
  &.lii-mid-button {
    transform: scale(1);
  }
  &.lii-small-button {
    padding: 8.4px 14px;
    font-size: 9.8px;
  }
  &.lii-mini-button {
    padding: 6px 10px;
    font-size: 7px;
  }
  &:focus,
  &:hover {
    color: #409eff;
    background-color: #ecf5ff;
  }
  &.is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
  }
  // is-round圆角
  &.is-round {
    border-radius: 25px;
  }
  // is-circle圆形
  &.is-circle {
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
  }
  // is-plain朴素
  &.is-plain {
    &:hover,
    &:focus {
      color: #409eff;
      background-color: #fff;
    }
  }
  // 主要按钮
  &.lii-button--primary {
    color: #ffffff;
    background-color: #409eff;
    // hover状态
    &:focus,
    &:hover {
      background-color: #66b1ff;
    }
    // is-disabled禁用
    &.is-disabled {
      color: #ffffff;
      cursor: not-allowed;
      background-color: #a0cfff;
      border: 1px solid #a0cfff;
    }
    // is-plain朴素
    &.is-plain {
      color: #409eff;
      background-color: #ecf5ff;
      border: 1px solid #409eff;
      &:focus,
      &:hover {
        color: #ffffff;
        background-color: #66b1ff;
      }
      &.is-disabled {
        color: #b4c9ff;
        background-color: #ecf5ff;
        border: 1px solid #d9ecff;
      }
    }
  }
  // 成功按钮
  &.lii-button--success {
    color: #ffffff;
    background-color: #67c23a;
    &:focus,
    &hover {
      background-color: #85ce61;
    }
    // is-disabled禁用
    &.is-disabled {
      color: #ffffff;
      cursor: not-allowed;
      background-color: #b3e19d;
      border: 1px solid #b3e19d;
    }
    // is-plain朴素
    &.is-plain {
      color: #93c26d;
      background-color: #f0f9eb;
      border: 1px solid #93c26d;
      &:focus,
      &:hover {
        color: #ffffff;
        background-color: #67c23a;
      }
      &.is-disabled {
        color: #b5da89;
        background-color: #f0f9eb;
        border: 1px solid #b5da89;
      }
    }
  }
  // 信息按钮
  &.lii-button--info {
    color: #ffffff;
    background-color: #909399;
    &:focus,
    &:hover {
      background-color: #a6a9ad;
    }
    // is-disabled禁用
    &.is-disabled {
      color: #ffffff;
      cursor: not-allowed;
      background-color: #c8c9cc;
      border: 1px solid #c8c9cc;
    }
    // is-plain朴素
    &.is-plain {
      background-color: #f4f4f5;
      color: #9093b0;
      border: 1px solid #9093b0;
      &:focus,
      &:hover {
        color: #ffffff;
        background-color: #909399;
      }
      &.is-disabled {
        color: #bcbec2;
        background-color: #f4f4f5;
        border: 1px solid #bcbec2;
      }
    }
  }
  // 警告按钮
  &.lii-button--warning {
    color: #ffffff;
    background-color: #e6a23c;
    &:focus,
    &:hover {
      background-color: #ebb563;
    }
    // is-disabled禁用
    &.is-disabled {
      color: #ffffff;
      cursor: not-allowed;
      background-color: #f3d19e;
      border: 1px solid #f3d19e;
    }
    // is-plain朴素
    &.is-plain {
      color: #efb43c;
      background-color: #fdf6ec;
      border: 1px solid #efb43c;
      &:focus,
      &:hover {
        color: #ffffff;
        background-color: #e6a23c;
      }
      &.is-disabled {
        color: #f0c7a3;
        background-color: #fdf6ec;
        border: 1px solid #f0c7a3;
      }
    }
  }
  // 危险按钮
  &.lii-button--danger {
    color: #ffffff;
    background-color: #f56c6c;
    &:focus,
    &:hover {
      background-color: #f78989;
    }
    // is-disabled禁用
    &.is-disabled {
      color: #ffffff;
      cursor: not-allowed;
      background-color: #fab6b6;
      border: 1px solid #fab6b6;
    }
    // is-plain朴素
    &.is-plain {
      color: #f56c6c;
      background-color: #fef0f0;
      border: 1px solid #fbc4c4;
      &:focus,
      &:hover {
        color: #ffffff;
        background-color: #f56c6c;
      }
      &.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border: 1px solid #f9a7a7;
      }
    }
  }
  & + .lii-button {
    // margin-left: 10px;
  }
}
</style>