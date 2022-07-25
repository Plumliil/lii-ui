<template>
  <lii-upload :multiple="true" @change="change" label="上传文件" btnType="primary"></lii-upload>
</template>

<script>
export default {
  name: '',
}
</script>
<script setup>
import liiUpload from '../../index.vue'
const change=(files)=>{
  console.log(files);
}
</script>

<style lang='less' scoped >
</style>