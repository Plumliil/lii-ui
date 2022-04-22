## Radio 单选
<script setup>
    import baseDemo from './demo/base.vue';
    import demo1 from './demo/demo1.vue';
    import demo2 from './demo/demo2.vue';
    import demo3 from './demo/demo3.vue';
    import demo4 from './demo/demo4.vue';
    import preview from "../../../src/components/preview.vue"
</script>


### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<baseDemo />
<preview compName="radio" demoName="base" />

### 排列样式
设置单选框的排列方式

<demo4 />
<preview compName="radio" demoName="demo4" />

### 禁用状态
单选框不可用的状态。

<demo1 />
<preview compName="radio" demoName="demo1" />

### 选框大小
调节单选框大小。

<demo2 />
<preview compName="radio" demoName="demo1" />

### 颜色设置
调节单选框颜色

<demo3 />
<preview compName="radio" demoName="demo3" />

### Attributes

| 参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 可选值 | 默认值 | 
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| options | 渲染单选框数据 | array |  | —          |
| inline                                                       | 单选框按行排列                                               | boolean                                                      | —                                                            | true       |
| size                                                         | 单选框大小                                                   | string                                                       | big/nomal/small                                              | nomal      |
| filedLabel                                                   | 自定义单选框标签名                                           | string                                                       | —                                                            | label      |
| filedValue                                                   | 自定义单选框值                                               | string                                                       | —                                                            | value      |
| customColor                                                  | 自定义单选框颜色                                             | string                                                       | 颜色值(rgb/rgba/hex/hsl) | \#409eff   |
| fontColor                                                    | 是否显示标签名颜色                                           | boolean                                                      | —                                                            | false      |
| checked                                                      | 选中第几个单选框                                             | Number                                                       | -1~options.length                                            | -1(不选中) |





### Events

| 事件名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 回调参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
| :----------------------------------------------------------- | :---------------------------------------------- | :--------------------- |
| change  | 绑定值变化时触发的事件&nbsp;&nbsp;&nbsp;&nbsp; | 选中的 Radio label 值 |