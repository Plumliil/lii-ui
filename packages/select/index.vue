<template>
  <div class="lii-select" v-clickOutside>
    <input :value="selectVal" type="text" :placeholder="placeholder" :class="{ 'lii-input-focus': isInputFocus }"
      readonly disabled />
    <transition name="slide-fade">
      <div class="lii-position-box" v-if="positionShow">
        <li v-for="(item, index) in props.options" :key="index" @click="change(item, index)" :class="{
            'item-disabled-li': item.disabled,
            'item-active-li': activeIndex == index,
          }" class="item-li">
          {{ item[props.filedLabel] }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "liiSelect",
  };
</script>

<script setup>
  import {
    ref
  } from "vue";
  const emit = defineEmits(["change", "update:modelValue"]);
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    options: {
      type: Array,
      default: () => [],
    },
    filedLabel: {
      type: String,
      default: "label",
    },
    filedValue: {
      type: String,
      default: "value",
    },
    modelValue: String,
  });
  const positionShow = ref(false);
  const selectVal = ref(props.modelValue);
  const isInputFocus = ref(false);
  const activeIndex = ref(-1);
  props.options.forEach((item, index) => {
    if (item[props.filedValue] == props.modelValue) {
      selectVal.value = item[props.filedLabel];
      activeIndex.value = index;
    }
  });

  const vClickOutside = {
    beforeMount(el) {
      let hindler = (e) => {
        if (!props.disabled) {
          if (
            el.contains(e.target) &&
            e.target.className.indexOf("item-li") == -1
          ) {
            positionShow.value = true;
            isInputFocus.value = true;
          } else {
            if (e.target.className.indexOf("item-disabled-li") == -1) {
              positionShow.value = false;
              isInputFocus.value = false;
            }
          }
        }
      };
      document.addEventListener("click", hindler);
    },
  };
  const change = (item, index) => {
    if (!item.disabled) {
      selectVal.value = item[props.filedLabel];
      positionShow.value = false;
      activeIndex.value = index;
      emit("change", item);
      emit("update:modelValue", item[props.filedLabel]);
    }
  };
</script>

<style lang='less'>
  .lii-select {
    display: inline-block;
    height: 40px;
    min-width: 250px;
    position: relative;
    z-index: 99;

    input {
      border: @baseBorder;
      padding: 8px 10px;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      transition: @baseTransTime;
      border-radius: @baseFillet;

      &::placeholder {
        color: #c6c8cc;
      }
    }

    .lii-input-focus {
      border-color: @primary;
    }

    .lii-position-box {
      width: 100%;
      height: auto;
      overflow: hidden;
      position: absolute;
      top: 42px;
      z-index: 999;
      border: @baseBorder;
      background-color: #ffffff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      li {
        list-style: none;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 14px;

        &:hover {
          background-color: @baseBgColor;
        }

        &.item-disabled-li {
          cursor: no-drop;
          color: #808080;
          background-color: @baseBgColor;
        }

        &.item-active-li {
          color: @primary;
        }
      }
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease;
    }

    .slide-fade-leave-active {
      transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
</style>