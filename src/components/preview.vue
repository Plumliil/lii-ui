<template>
  <div class="container">
    <div class="pre-code-box">
      <transition name="codeTrans">
        <pre class="langue-html" v-show="showCode">
            <code class="html">{{ sourceCode }}</code>
        </pre>
      </transition>
    </div>
    <div class="showCode" @click="codeShow">
      {{ showCode ? "隐藏代码" : "显示代码" }}
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
const showCode = ref(false);
const sourceCode = ref("");
// 函数
const codeShow = () => {
  showCode.value = !showCode.value;
  console.log(showCode);
};

console.log(sourceCode);
</script>

<style lang='less' scoped>
.container {
  max-width: 823px;
  margin: 20px 0;
  .pre-code-box {
    background-color: @codeBgColor;
  }
  .showCode {
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    border: @borderBase;
    cursor: pointer;
    transition: .3s;
    &:hover{
      color: #409eff;
    }
  }
}
</style>