<template>
  <div class="container">
    <transition name="slide-fade" appear>
      <div class="pre-code-box" v-if="isShowCode">
        <!-- <span class="copy" v-show="showCode" @click="copyCode">copy</span> -->
        <pre><code ref="codeTxt">{{ sourceCode }}</code></pre>
      </div>
    </transition>
    <div class="showCode" @click="codeShow">
      {{ isShowCode ? "隐藏代码" : "显示代码" }}
      <!-- {{ isShowCode ? "▲" : "▼" }} -->
      <!-- {{ isShowCode ? "◠" : "◡" }} -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "",
    require: true,
  },
});
let reg = /^(import.*[index\.vue"];)$/gi;

async function getSourceCode() {
  sourceCode.value = (
    await import(
      `../../packages/${props.compName}/doc/demo/${props.demoName}.vue?raw`
    )
  ).default;
}
// 生命周期
onMounted(() => {
  getSourceCode();
});
// 变量
const isShowCode = ref(false);
const sourceCode = ref("");

// 函数
const codeShow = () => {
  isShowCode.value = !isShowCode.value;
};
</script>

<style lang='less' scoped>
.container {
  max-width: 823px;
  margin: 20px 0;
  .pre-code-box {
    position: relative;
    padding: 3px;
    background-color: rgba(245,245,245,.8);
    code {
      font-family: "Courier New";
      font-size: 12px;
    }
    .copy {
      background-color: white;
      border-radius: 3px;
      width: 40px;
      height: 25px;
      line-height: 20px;
      text-align: center;
      top: 5px;
      right: 5px;
      padding: 0 3px;
      position: absolute;
      cursor: pointer;
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
  .showCode {
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    border: @baseBorder;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: @primary;
    }
  }
}
</style>