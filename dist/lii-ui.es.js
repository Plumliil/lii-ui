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
import { useAttrs, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, ref as ref$1, normalizeStyle, toDisplayString, createCommentVNode, useSlots, h, withDirectives, createVNode, Transition, withCtx, Fragment, renderList, useCssVars, onMounted as onMounted$1, onUnmounted, createBlock, vShow, render, reactive as reactive$1 } from "vue";
var index_vue_vue_type_style_index_0_lang$b = "";
const _hoisted_1$9 = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4\u6309\u94AE");
const __default__$a = {
  name: "liiButton"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$a, {
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
            _hoisted_1$9
          ])
        ])
      ], 2);
    };
  }
});
_sfc_main$b.install = (app) => {
  app.component(_sfc_main$b.name, _sfc_main$b);
};
var index_vue_vue_type_style_index_0_lang$a = "";
const _hoisted_1$8 = ["value", "disabled", "placeholder"];
const __default__$9 = {
  name: "liiInput"
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$9, {
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
      }, null, 42, _hoisted_1$8);
    };
  }
});
_sfc_main$a.install = (app) => {
  app.component(_sfc_main$a.name, _sfc_main$a);
};
var index_vue_vue_type_style_index_0_lang$9 = "";
const _hoisted_1$7 = ["cols", "rows", "resize", "value", "disabled", "readonly", "maxlength", "placeholder"];
const _hoisted_2$4 = {
  key: 0,
  class: "max-length-line"
};
const __default__$8 = {
  name: "liiTextarea"
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$8, {
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
    const fontCount = ref$1(0);
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
        }, null, 44, _hoisted_1$7),
        __props.maxlength ? (openBlock(), createElementBlock("div", _hoisted_2$4, toDisplayString(fontCount.value) + "/" + toDisplayString(__props.maxlength), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
_sfc_main$9.install = (app) => {
  app.component(_sfc_main$9.name, _sfc_main$9);
};
var index_vue_vue_type_style_index_0_lang$8 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
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
    const slotList = ref$1([]);
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
const _hoisted_1$6 = { class: "lii-space" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6);
}
var liiSpace = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
liiSpace.install = (app) => {
  app.component(liiSpace.name, liiSpace);
};
var index_vue_vue_type_style_index_0_lang$7 = "";
const _hoisted_1$5 = { class: "lii-select" };
const _hoisted_2$3 = ["value", "placeholder"];
const _hoisted_3$2 = {
  key: 0,
  class: "lii-position-box"
};
const _hoisted_4$2 = ["onClick"];
const __default__$7 = {
  name: "liiSelect"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$7, {
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
    const positionShow = ref$1(false);
    const selectVal = ref$1(props.modelValue);
    const isInputFocus = ref$1(false);
    const activeIndex = ref$1(-1);
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
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("input", {
          value: selectVal.value,
          type: "text",
          placeholder: __props.placeholder,
          class: normalizeClass({ "lii-input-focus": isInputFocus.value }),
          readonly: "",
          disabled: ""
        }, null, 10, _hoisted_2$3),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            positionShow.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  onClick: ($event) => change(item, index),
                  class: normalizeClass([{
                    "item-disabled-li": item.disabled,
                    "item-active-li": activeIndex.value == index
                  }, "item-li"])
                }, toDisplayString(item[props.filedLabel]), 11, _hoisted_4$2);
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
_sfc_main$7.install = (app) => {
  app.component(_sfc_main$7.name, _sfc_main$7);
};
var index_vue_vue_type_style_index_0_lang$6 = "";
const _hoisted_1$4 = { class: "lii-radio" };
const _hoisted_2$2 = ["onClick"];
const __default__$6 = {
  name: "liiRadio"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$6, {
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
      "bcd97af2": props.customColor
    }));
    if (props.checked > props.optionslength + 1) {
      props.checked = 0;
    }
    const currentIndex = ref$1(props.checked);
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
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
          ], 10, _hoisted_2$2);
        }), 128))
      ]);
    };
  }
});
_sfc_main$6.install = (app) => {
  app.component(_sfc_main$6.name, _sfc_main$6);
};
var index_vue_vue_type_style_index_0_lang$5 = "";
const __default__$5 = {
  name: "liiMessage"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$5, {
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
    onMounted$1(() => {
      visible.value = true;
      startTimer();
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    let timer = null;
    const visible = ref$1(false);
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
function Message(options) {
  options.onClose;
  __spreadProps(__spreadValues({}, options), {
    onClose() {
      onClose == null ? void 0 : onClose();
    }
  });
  const container = document.createElement("div");
  const vm = createVNode(_sfc_main$5, options);
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
}
Message.install = (app) => {
  app.config.globalProperties.$message = Message;
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const NO = () => false;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const targetMap = /* @__PURE__ */ new WeakMap();
let trackOpBit = 1;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onMounted = createHook("m");
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
createAppContext();
let currentInstance = null;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
let isInSSRComponentSetup = false;
var index_vue_vue_type_style_index_0_lang$4 = "";
const _hoisted_1$3 = { class: "lii-collapse" };
const __default__$4 = {
  name: "liiCollapse"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const PARENT_PROVIDE = "parentProvide";
    provide(PARENT_PROVIDE, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
_sfc_main$4.install = (app) => {
  app.component(_sfc_main$4.name, _sfc_main$4);
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const __default__$3 = {
  name: "liiProgress"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    percentage: {
      type: Number
    },
    type: {
      type: String,
      default: "line"
    },
    strokeWidth: {
      type: Number
    },
    textInside: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "primary"
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    },
    colors: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: []
    },
    width: {
      type: Number,
      default: 500
    }
  },
  setup(__props) {
    const props = __props;
    let liiProgressBar = reactive([]);
    let percentText = reactive(["percentText"]);
    let colorChange = ref("");
    if (props.type === "line" && props.textInside === true) {
      liiProgressBar.push("liiProgress-bar-progressText");
    } else {
      liiProgressBar.push("liiProgress-bar");
    }
    if (props.status) {
      switch (props.status) {
        case "primary":
          liiProgressBar.push("liiProgress-status-primary");
          break;
        case "success":
          liiProgressBar.push("liiProgress-status-success");
          break;
        case "warning":
          liiProgressBar.push("liiProgress-status-warning");
          break;
        case "error":
          liiProgressBar.push("liiProgress-status-error");
          break;
        default:
          liiProgressBar.push("liiProgress-status-primary");
          break;
      }
    }
    if (props.type === "line") {
      switch (props.textInside) {
        case false:
          percentText.push("liiProgress-bar-textOutside");
          break;
        case true:
          percentText.push("liiProgress-bar-textInside");
          break;
        default:
          percentText.push("liiProgress-bar-textOutside");
          break;
      }
    }
    if (props.color) {
      colorChange = props.color;
    } else if (props.colors) {
      props.colors.forEach((item) => {
        if (props.percentage >= item.percentage) {
          colorChange = item.color;
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "liiProgress",
        style: normalizeStyle({ width: __props.width + "px" })
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(liiProgressBar)),
          style: normalizeStyle({ "width": __props.percentage + "%", "background-color": unref(colorChange) })
        }, [
          __props.showText ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass(unref(percentText))
          }, toDisplayString(props.percentage + "%"), 3)) : createCommentVNode("", true)
        ], 6)
      ], 4);
    };
  }
});
_sfc_main$3.install = (app) => {
  app.component(_sfc_main$3.name, _sfc_main$3);
};
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$2 = {
  class: "lii-badge",
  ref: "badge"
};
const __default__$2 = {
  name: "liiBadge"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    value: {
      type: String || Number
    }
  },
  setup(__props) {
    const props = __props;
    let badgeValue = ref$1(props.value);
    ref$1(0);
    let modifyStyle = reactive$1({
      "width": "20px",
      "border-radius": "50%"
    });
    let a = parseInt("a");
    console.log(a);
    console.log(badgeValue.value);
    if (badgeValue.value.length && badgeValue.value.length - 1 > 0) {
      if (parseInt(badgeValue.value) > 99) {
        badgeValue.value = "99+";
        (badgeValue.value.length - 1) * 10 + 15 + "px";
        modifyStyle = reactive$1({
          "width": "30px",
          "border-radius": "15px",
          "font-size": "6px"
        });
      } else {
        (badgeValue.length - 1) * 10 + 15 + "px";
        modifyStyle = reactive$1({
          "border-radius": "15px"
        });
      }
    } else {
      modifyStyle = reactive$1({
        "width": "15px",
        "height": "15px",
        "border-radius": "15px",
        "right": "10px"
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default", { class: "xxx" }),
        createElementVNode("span", {
          class: "lii-badge-modify",
          style: normalizeStyle(unref(modifyStyle))
        }, toDisplayString(unref(badgeValue)), 5)
      ], 512);
    };
  }
});
_sfc_main$2.install = (app) => {
  app.component(_sfc_main$2.name, _sfc_main$2);
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$1 = { class: "lii-loader" };
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("span", null, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("span", null, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("span", null, null, -1);
const _hoisted_6 = /* @__PURE__ */ createElementVNode("span", null, null, -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = ["data-text"];
const _hoisted_9 = /* @__PURE__ */ createElementVNode("div", { class: "loader-five-box" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "loader-five-cube" })
], -1);
const _hoisted_10 = [
  _hoisted_9
];
const __default__$1 = {
  name: ""
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "big"
    },
    value: {
      type: String,
      default: "Loading..."
    }
  },
  setup(__props) {
    const props = __props;
    const loaderClass = reactive([props.type]);
    switch (props.size) {
      case "mini":
        loaderClass.push("lii-loader--mini");
        break;
      case "mid":
        loaderClass.push("lii-loader--mid");
        break;
      case "big":
        loaderClass.push("lii-loader--big");
        break;
      default:
        loaderClass.push("lii-loader--small");
        break;
    }
    console.log(loaderClass);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("div", _hoisted_1$1, [
          props.type === "loader-two" && __props.isLoading ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(loaderClass))
          }, _hoisted_4$1, 2)) : createCommentVNode("", true),
          props.type === "loader-three" && __props.isLoading ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(loaderClass))
          }, _hoisted_7, 2)) : createCommentVNode("", true),
          props.type === "loader-four" && __props.isLoading ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(unref(loaderClass))
          }, [
            createElementVNode("h2", {
              "data-text": props.value
            }, toDisplayString(props.value), 9, _hoisted_8)
          ], 2)) : createCommentVNode("", true),
          props.type === "loader-five" && __props.isLoading ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(unref(loaderClass))
          }, _hoisted_10, 2)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "lii-upload" };
const _hoisted_2 = ["multiple"];
const _hoisted_3 = { class: "fileList-box" };
const _hoisted_4 = ["onClick"];
const __default__ = {
  name: "liiUpload"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "\u9009\u62E9\u6587\u4EF6"
    },
    btnType: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:fileList"],
  setup(__props, { emit: emits }) {
    const fileList = reactive([]);
    const inpRef = ref(null);
    const areaRef = ref(null);
    const isActive = ref(false);
    const fileChange = () => {
      inpRef.value.click();
    };
    const inpChange = (e) => {
      fileList.unshift(...e.target.files);
      emits("change", fileList);
    };
    const deleteFile = (index) => {
      fileList.splice(index, 1);
      emits("3333333333", fileList);
    };
    onMounted(() => {
      console.log(areaRef.value);
      let dropArea = areaRef.value;
      dropArea.addEventListener("drop", (e) => {
        e.stopPropagation();
        e.preventDefault();
        fileList.unshift(...e.dataTransfer.files);
        console.log(e.dataTransfer.files);
        isActive.value = false;
      }, false);
      dropArea.addEventListener("dragleave", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("\u7ECF\u8FC7");
        isActive.value = false;
      }, false);
      dropArea.addEventListener("dragenter", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("\u8FDB\u5165");
        isActive.value = true;
      }, false);
      dropArea.addEventListener("dragover", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("\u5B8C\u6210");
        isActive.value = true;
      }, false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("input", {
          type: "file",
          multiple: __props.multiple,
          ref_key: "inpRef",
          ref: inpRef,
          class: "file-input",
          onChange: inpChange
        }, null, 40, _hoisted_2),
        createVNode(_sfc_main$b, {
          onClick: fileChange,
          type: __props.btnType
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.label), 1)
          ]),
          _: 1
        }, 8, ["type"]),
        createElementVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(fileList), (item, index) => {
            return openBlock(), createElementBlock("li", { key: index }, [
              createElementVNode("span", null, toDisplayString(item.name), 1),
              createElementVNode("span", {
                class: "delete-span",
                onClick: ($event) => deleteFile(index)
              }, "x", 8, _hoisted_4)
            ]);
          }), 128))
        ]),
        createElementVNode("div", {
          class: normalizeClass(["area-box", { activeArea: isActive.value }]),
          onClick: fileChange,
          ref_key: "areaRef",
          ref: areaRef
        }, null, 2)
      ]);
    };
  }
});
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
const components = [
  _sfc_main$b,
  _sfc_main$a,
  liiSpace,
  _sfc_main$9,
  _sfc_main$7,
  _sfc_main$6,
  _sfc_main$4,
  _sfc_main$3,
  _sfc_main$2,
  _sfc_main$1,
  _sfc_main
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
export { Message, LiiUI as default, _sfc_main$2 as liiBadge, _sfc_main$b as liiButton, _sfc_main$4 as liiCollapse, _sfc_main$a as liiInput, _sfc_main$1 as liiLoading, _sfc_main$3 as liiProgress, _sfc_main$6 as liiRadio, _sfc_main$7 as liiSelect, liiSpace, _sfc_main$9 as liiTextarea, _sfc_main as liiUpload };
