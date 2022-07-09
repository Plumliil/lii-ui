## Collapse 手风琴
<script setup>
    import baseDemo from './demo/base.vue';
    import demo1 from './demo/demo1.vue';
    import preview from "../../../src/components/preview.vue"
</script>

### 线形进度条
进度百分比显示在右侧
<baseDemo />
<preview compName="progress" demoName="base" />


### 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

<demo1 />
<preview compName="progress" demoName="demo1" />


