<template>
  <div id="collapse-item">
    <div class="header" @click="changeActive">
      <h4>{{title}}</h4>
    </div>
    <div class="wrap" v-show="isShow">
      {{isShow}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {
    ref
  } from '@vue/reactivity';
  import {
    computed,
    inject,
    onMounted
  } from '@vue/runtime-core';
  export default {
    name: 'liiCollapseItem',
  }
</script>
<script setup>
  const props = defineProps({
    title: {
      type: String
    },
    name: {
      type: [String, Number]
    }
  })
  const emits=defineEmits(['item-click'])
  const PARENT_PROVIDE = 'parentProvide'
  const parentProps = inject(PARENT_PROVIDE);
  let isShow = ref(parentProps.value.indexOf(props.name) > -1)
  console.log(isShow);
 const changeActive=(e)=>{
    emits('item-click',isShow)
    console.log(isShow);
    // console.log(e);
  }
</script>

<style lang='less' scoped>
  #collapse-item {
    .header {
      h4{
        cursor: pointer;
      }
    }
  }
</style>