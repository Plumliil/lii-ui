<template>
  <div class="lii-upload">
    <input type="file" :multiple="multiple" ref="inpRef" class="file-input" @change="inpChange">
    <lii-button @click="fileChange" :type="btnType">{{label}}</lii-button>
    <div class="fileList-box">
      <li v-for="(item,index) in fileList" :key="index">
        <span>{{item.name}}</span>
        <span class="delete-span" @click="deleteFile(index)">x</span>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'liiUpload',
  }
</script>
<script setup>
  import {
    reactive,
    ref
  } from '@vue/reactivity';
  import liiButton from '../button/index.vue';
  const props = defineProps({
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: '选择文件'
    },
    btnType: {
      type: String,
      default: ''
    }
  })
  const emits = defineEmits(['change', 'update:fileList']);
  const fileList = reactive([]);
  const inpRef = ref(null);
  const fileChange = () => {
    inpRef.value.click()
  }
  const inpChange = (e) => {
    fileList.unshift(...e.target.files)
    emits('change', fileList)
  }
  const deleteFile=(index)=>{
    fileList.splice(index,1);
    emits('update:fileList',fileList)
  }
</script>

<style lang='less' scoped>
  .lii-upload {
    .file-input {
      display: none;
    }

    .fileList-box {
      li {
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .delete-span{
          cursor: pointer;
        }
}
    }
  }
</style>