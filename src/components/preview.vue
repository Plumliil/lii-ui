<template>
  <div class="container">
    <div class="pre-code-box">
      <!-- <span class="copy" v-show="showCode" @click="copyCode">copy</span> -->
      <transition name="codeTrans">
        <pre class="langue-html" v-show="showCode">
            <code ref="codeTxt">{{ sourceCode }}</code>
        </pre>
      </transition>
    </div>
    <div class="showCode" @click="codeShow">
      {{ showCode ? "隐藏代码" : "显示代码" }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";
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
// const conText=useAttrs();
const showCode = ref(false);
const sourceCode = ref("");
const codeTxt = ref(null);
// 函数
const codeShow = () => {
  showCode.value = !showCode.value;
};
const copyCode = (e) => {
  console.log(e);
  console.log(codeTxt.value.innerHTML);
  codeTxt.select();
  document.execCommand('copy')
};
</script>

<style lang='less' scoped>
.container {
  max-width: 823px;
  margin: 20px 0;
  .pre-code-box {
    position: relative;
    background-color: #f0f0f0;
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
  }
  .showCode {
    z-index: 99;
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    border: @borderBase;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: @primary;
    }
  }
}
</style>