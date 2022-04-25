## Message 消息
<script setup>
    import baseDemo from './demo/base.vue';
    // import demo1 from './demo/demo1.vue';
    // import demo2 from './demo/demo2.vue';
    // import demo3 from './demo/demo3.vue';
    // import demo4 from './demo/demo4.vue';
    import preview from "../../../src/components/preview.vue"
</script>


### 基础用法


<baseDemo />
<!-- <preview compName="radio" demoName="base" /> -->



<!-- ### Attributes

---

| 参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 可选值 | 默认值 | 
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| options | 渲染单选框数据 | Array |  | —          |
| inline                                                       | 单选框按行排列                                               | Boolean                                                      | —                                                            | true       |
| size                                                         | 单选框大小                                                   | String                                                       | big/nomal/small                                              | nomal      |
| filedLabel                                                   | 自定义单选框标签名                                           | String                                                       | —                                                            | label      |
| filedValue                                                   | 自定义单选框值                                               | String                                                       | —                                                            | value      |
| customColor                                                  | 自定义单选框颜色                                             | String                                                       | 颜色值(rgb/rgba/hex/hsl) | \#409eff   |
| fontColor                                                    | 是否显示标签名颜色                                           | Boolean                                                      | —                                                            | false      |
| checked                                                      | 选中第几个单选框                                             | Number                                                       | -1~options.length                                            | -1(不选中) |





### Events

---

| 事件名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 回调参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 示例&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
| :----------------------------------------------------------- | :---------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| change   | 选项发生变化时触发 | (event: Value) | change=(value)=>{console.log(value)} | -->