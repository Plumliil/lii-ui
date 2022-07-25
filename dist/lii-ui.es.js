var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { useAttrs, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, ref, normalizeStyle, toDisplayString, createCommentVNode, useSlots, h, withDirectives, createVNode, Transition, withCtx, Fragment, renderList, useCssVars, onMounted, onUnmounted, createBlock, vShow, render } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$5 = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4\u6309\u94AE");
const __default__$5 = {
  name: "liiButton"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$5, {
  props: {
    type: {
      type: String,
      validator(value) {
        const typeArr = ["primary", "success", "info", "warning", "danger"];
        return typeArr.includes(value);
      }
    }
  },
  setup(__props) {
    const props = __props;
    const $attrs = useAttrs();
    const liiClass = computed(() => {
      let btnClassArr = ["lii-button--" + props.type];
      if ("size" in $attrs)
        btnClassArr.push(`lii-${$attrs.size}-button`);
      if ("disabled" in $attrs)
        btnClassArr.push("is-disabled");
      if ("plain" in $attrs)
        btnClassArr.push("is-plain");
      if ("round" in $attrs)
        btnClassArr.push("is-round");
      if ("circle" in $attrs)
        btnClassArr.push("is-circle");
      return btnClassArr;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["lii-button", unref(liiClass)])
      }, [
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_1$5
          ], true)
        ])
      ], 2);
    };
  }
});
var liiButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-af64824e"]]);
liiButton.install = (app) => {
  app.component(liiButton.name, liiButton);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const _hoisted_1$4 = ["value", "disabled", "placeholder"];
const __default__$4 = {
  name: "liiInput"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    disabled: Boolean,
    modelValue: String | Number,
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165..."
    },
    size: {
      type: String,
      default: "mid"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const liiInputClass = computed(() => {
      let iptClass = {
        "lii-input": true,
        "lii-input--disabled": props.disabled,
        ["lii-" + props.size + "-input"]: true
      };
      return iptClass;
    });
    const input = (e) => {
      emits("update:modelValue", e.target.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        class: normalizeClass(unref(liiInputClass)),
        type: "text",
        value: __props.modelValue,
        onInput: input,
        disabled: __props.disabled,
        placeholder: __props.placeholder
      }, null, 42, _hoisted_1$4);
    };
  }
});
var liiInput = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9e040f76"]]);
liiInput.install = (app) => {
  app.component(liiInput.name, liiInput);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$3 = ["cols", "rows", "resize", "value", "disabled", "readonly", "maxlength", "placeholder"];
const _hoisted_2$2 = {
  key: 0,
  class: "max-length-line"
};
const __default__$3 = {
  name: "liiTextarea"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    modelValue: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 30
    },
    resize: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const ateaClass = computed(() => {
      return {
        "lii-textarea": true,
        "lii-textarea--disabled": props.disabled
      };
    });
    const fontCount = ref(0);
    const tStyle = computed(() => {
      return {
        resize: props.resize ? "auto" : "none"
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ateaClass))
      }, [
        createElementVNode("textarea", {
          name: "",
          id: "",
          onFocus: focus,
          onBlur: blur,
          onInput: input,
          cols: __props.cols,
          rows: __props.rows,
          resize: __props.resize,
          value: __props.modelValue,
          disabled: __props.disabled,
          readonly: __props.readonly,
          maxlength: __props.maxlength,
          placeholder: __props.placeholder,
          style: normalizeStyle(unref(tStyle))
        }, null, 44, _hoisted_1$3),
        __props.maxlength ? (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(fontCount.value) + "/" + toDisplayString(__props.maxlength), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var liiTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3e3a59c2"]]);
liiTextarea.install = (app) => {
  app.component(liiTextarea.name, liiTextarea);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$3 = {
  name: "liiSpace",
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Array,
      default: [10, 10]
    }
  },
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const tStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: props.inline ? `${props.size[0]}px` : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.inline ? "inherit" : "column"
      };
    });
    $slots.default().forEach((item, index) => {
      slotList.value.push(h("div", {
        className: "lii-space-item",
        style: 'width"100%'
      }, item));
    });
    return () => [
      h("div", {
        className: "lii-space",
        style: tStyle.value
      }, slotList.value)
    ];
  }
};
const _hoisted_1$2 = { class: "lii-space" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2);
}
var liiSpace = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-ba1d51e4"]]);
liiSpace.install = (app) => {
  app.component(liiSpace.name, liiSpace);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$1 = { class: "lii-select" };
const _hoisted_2$1 = ["value", "placeholder"];
const _hoisted_3 = {
  key: 0,
  class: "lii-position-box"
};
const _hoisted_4 = ["onClick"];
const __default__$2 = {
  name: "liiSelect"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    options: {
      type: Array,
      default: () => []
    },
    filedLabel: {
      type: String,
      default: "label"
    },
    filedValue: {
      type: String,
      default: "value"
    },
    modelValue: String
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
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
            if (el.contains(e.target) && e.target.className.indexOf("item-li") == -1) {
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
      }
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
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("input", {
          value: selectVal.value,
          type: "text",
          placeholder: __props.placeholder,
          class: normalizeClass({ "lii-input-focus": isInputFocus.value }),
          readonly: "",
          disabled: ""
        }, null, 10, _hoisted_2$1),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            positionShow.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  onClick: ($event) => change(item, index),
                  class: normalizeClass([{
                    "item-disabled-li": item.disabled,
                    "item-active-li": activeIndex.value == index
                  }, "item-li"])
                }, toDisplayString(item[props.filedLabel]), 11, _hoisted_4);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])), [
        [vClickOutside]
      ]);
    };
  }
});
var liiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dae87130"]]);
liiSelect.install = (app) => {
  app.component(liiSelect.name, liiSelect);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1 = { class: "lii-radio" };
const _hoisted_2 = ["onClick"];
const __default__$1 = {
  name: "liiRadio"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "mid"
    },
    filedLabel: {
      type: String,
      default: "label"
    },
    filedValue: {
      type: String,
      default: "value"
    },
    customColor: {
      type: String,
      default: "#409eff"
    },
    fontColor: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Number,
      default: -1
    }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "f30e19a8": props.customColor
    }));
    if (props.checked > props.optionslength + 1) {
      props.checked = 0;
    }
    const currentIndex = ref(props.checked);
    const itemRadioState = computed(() => {
      return {
        "lii-item-inline-radio": props.inline,
        [`lii-item-${props.size}-radio`]: true
      };
    });
    const change = (item, index) => {
      if (!item.disabled) {
        currentIndex.value = index;
        emits("change", item);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (item, index) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["lii-item-radio", [
              { "lii-item-disabled-radio": item.disabled },
              unref(itemRadioState),
              { active: currentIndex.value === index && __props.fontColor }
            ]]),
            key: index,
            onClick: ($event) => change(item, index)
          }, [
            createElementVNode("span", {
              class: normalizeClass({ active: currentIndex.value === index })
            }, null, 2),
            createTextVNode(" " + toDisplayString(item[__props.filedLabel]), 1)
          ], 10, _hoisted_2);
        }), 128))
      ]);
    };
  }
});
var liiRadio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b9c034c0"]]);
liiRadio.install = (app) => {
  app.component(liiRadio.name, liiRadio);
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__ = {
  name: "liiMessage"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    id: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    duration: {
      type: Number,
      default: 3e3
    },
    center: {
      type: String,
      default: ""
    },
    onColor: {
      type: Function
    },
    offset: {
      type: Number,
      default: 20
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      visible.value = true;
      startTimer();
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    let timer = null;
    const visible = ref(false);
    const startTimer = () => {
      timer = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    };
    const classs = computed(() => [
      "lii-message--" + props.type,
      props.center ? "is-center" : ""
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "lii-message-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(["lii-message", unref(classs)])
          }, "\u6211\u662Fmessage", 2), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
var liiMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c975af1"]]);
function Message(options) {
  options.onClose;
  __spreadProps(__spreadValues({}, options), {
    onClose() {
      onClose == null ? void 0 : onClose();
    }
  });
  const container = document.createElement("div");
  const vm = createVNode(liiMessage, options);
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
}
Message.install = (app) => {
  app.config.globalProperties.$message = Message;
};
const components = [
  liiButton,
  liiInput,
  liiSpace,
  liiTextarea,
  liiSelect,
  liiRadio
];
const plugins = [
  Message
];
const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};
const LiiUI = {
  install
};
export { Message, LiiUI as default, liiButton, liiInput, liiRadio, liiSelect, liiSpace, liiTextarea };
