<template>
  <div :class="ateaClass">
    <textarea name="" id="" @focus="focus" @blur="blur" @input="input" :cols="cols" :rows="rows" :resize="resize"
      :value="modelValue" :disabled="disabled" :readonly="readonly" :maxlength="maxlength" :placeholder="placeholder"
      :style="tStyle"></textarea>
    <div class="max-length-line" v-if="maxlength">
      {{ fontCount }}/{{ maxlength }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "liiTextarea",
  };
</script>
<script setup>
  import {
    ref,
    computed
  } from "vue";
  const props = defineProps({
    modelValue: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 4,
    },
    cols: {
      type: Number,
      default: 30,
    },
    resize: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
  });
  const emit = defineEmits(["update:modelValue", "focus", "blur"]);
  const ateaClass = computed(() => {
    return {
      "lii-textarea": true,
      "lii-textarea--disabled": props.disabled,
    };
  });
  const fontCount = ref(0);
  const tStyle = computed(() => {
    return {
      resize: props.resize ? "auto" : "none",
    };
  });
  const input = (e) => {
    fontCount.value = e.target.value.length;
    if (fontCount.value > props.maxlength) {
      fontCount.value = props.maxlength;
    }
    emit("update:modelValue", e.target.value);
  };
  const focus = (e) => {
    emit("focus", e);
  };
  const blur = (e) => {
    emit("blur", e);
  };
</script>
<style lang='less'>
  .lii-textarea {
    width: auto;
    height: auto;
    display: inline-block;
    overflow: hidden;
    position: relative;
    textarea {
      padding: 5px 5px 8px 8px;
      outline: none;
      border-radius: 4px;
      font-size: 14px;
      font-family: auto;
      color: #505055;

      // border: @baseBorder;
      &:focus {
        border: 1px solid @primary;
      }
    }

    textarea::placeholder {
      color: #c6c8cc;
    }

    .max-length-line {
      line-height: 20px;
      font-size: 12px;
      text-align: right;
      padding: 0 10px;
      color: #aeafb3;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
  }

  .lii-textarea--disabled {
    textarea {
      cursor: no-drop;
    }
  }
</style>