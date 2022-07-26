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
    <div class="area-box" @click="fileChange" ref="areaRef" :class="{activeArea:isActive}"></div>
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
  import {
    onMounted
  } from '@vue/runtime-core';
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
  const areaRef = ref(null);
  const isActive = ref(false);
  const fileChange = () => {
    inpRef.value.click()
  }
  const inpChange = (e) => {
    fileList.unshift(...e.target.files)
    emits('change', fileList)
  }
  const deleteFile = (index) => {
    fileList.splice(index, 1);
    emits('3333333333', fileList)
  }
  onMounted(() => {
    console.log(areaRef.value);
    let dropArea = areaRef.value;
    dropArea.addEventListener('drop', (e) => {
      e.stopPropagation();
      e.preventDefault();
      fileList.unshift(...e.dataTransfer.files)
      console.log(e.dataTransfer.files);
      isActive.value = false;
    }, false)
    dropArea.addEventListener('dragleave', (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('经过');
      isActive.value = false;
    }, false)
    dropArea.addEventListener('dragenter', (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('进入');
      isActive.value = true;
    }, false)
    dropArea.addEventListener('dragover', (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('完成');
      isActive.value = true;
    }, false)
  })
</script>

<style lang='less'>
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

        .delete-span {
          cursor: pointer;
        }
      }
    }

    .area-box {
      width: 200px;
      height: 200px;
      border: @baseBorder;
      margin: 10px 0;
      transition: .5s;
    }

    .activeArea {
      border: 1px solid @primary;
    }
  }
</style>.o8