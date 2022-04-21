## Select 下拉框
<script setup>
    import baseStyle from './demo/base.vue';
    import demo1 from './demo/demo1.vue';
    import demo2 from './demo/demo2.vue';
    import demo3 from './demo/demo3.vue';
    import preview from "../../../src/components/preview.vue"
</script>

### 基本使用
<baseStyle />
<preview compName="select" demoName="base" />

### 禁用选项
<demo1 />
<preview compName="select" demoName="demo1" />

### 匹配不同格式数据

<demo2 />
<preview compName="select" demoName="demo2" />

### 默认选中

<demo3 />
<preview compName="select" demoName="demo3" />
