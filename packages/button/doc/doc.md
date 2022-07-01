## Button 按钮
常用的操作按钮
<script setup>
    import based from './demo/base.vue';
    import demo1 from './demo/demo1.vue';
    import demo2 from './demo/demo2.vue';
    import preview from "../../../src/components/preview.vue"
</script>
### 基础用法
基础的按钮用法。

<based />

<preview compName="button" demoName="base" />

### 禁用状态
按钮不可用状态。

<demo1 />

<preview compName="button" demoName="demo1" />

### 大小选择
设置按钮大小

<demo2 />

<preview compName="button" demoName="demo2" />

### Attributes

---

| 参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 可选值&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 默认值 | 
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
|type       |按钮类型      |String| primary,success,warning,danger,info |  —   |
|size       |按钮大小      |String | big/mid/small/mini | mid |
|plain      |是否朴素按钮  |Boolean| — | false   |
|round      |是否圆角按钮  |Boolean| — | false   |
|circle     |是否圆形按钮  |Boolean| — | false   |
|disabled   |是否按钮禁用  |Boolean| — | false   |
|customColor|自定义按钮颜色|String | — | #ffffff |