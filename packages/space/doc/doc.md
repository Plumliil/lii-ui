## Space 间距
<script setup>
    import baseDemo from './demo/base.vue';
    import demo1 from './demo/demo1.vue';
    import demo2 from './demo/demo2.vue';
    import demo3 from './demo/demo3.vue';
    import preview from "../../../src/components/preview.vue"
</script>

### 基本用法

<baseDemo />
<preview compName="input" demoName="base" />

### 禁止状态

<demo1 />
<preview compName="input" demoName="demo1" />

### 尺寸

<demo2 />
<preview compName="input" demoName="demo1" />

### Attributes

---

| 参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 可选值&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 默认值 | 
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
|size           |输入框大小        | String  | big/mid/small | mid        |
|disabled       |输入框是否禁用    | Boolean |       —       | false      |
|placeholder    |输入框内默认内容  | String  |       —       | 请输入...  |