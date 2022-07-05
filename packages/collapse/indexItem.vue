<template>
  <div id="collapse-item">
    <div class="header" @click="changeActive(name)">
      <h4 :class="[{activeB:isShow},{activeD:true}]">{{title}}</h4>
    </div>
    <transition name="fade">
      <div class="wrap" v-show="isShow">
        <slot></slot>
      </div>
    </transition>
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
  const PARENT_PROVIDE = 'parentProvide'
  const parentProps = inject(PARENT_PROVIDE);
  let isShow = ref(parentProps.value.indexOf(props.name) > -1 ? true : false)
  const changeActive = (v) => {
    isShow.value = !isShow.value
  }
</script>

<style lang='less' scoped>
  #collapse-item {
    // border: 1px solid black;
    margin: 3px 0;

    .header {
      margin: 0;
      width: 600px;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      border-bottom: @baseBorder;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      h4 {
        position: relative;
        margin: 0;
        padding: 0 0 10px 10px;
        height: 100%;
        width: 100%;
        line-height: 40px;
      }
      .activeD::after{
        content:'🞂';
        font-size: 15px;
        position: absolute;
        right: 10px;
      }
      .activeB::after{
        content:'⏷';
        font-size: 15px;
        position: absolute;
        right: 10px;
      }
      // .activeA::after{
      //   content:'>';
      //   font-size: 15px;
      //   position: absolute;
      //   right: 10px;
      // }
    }

    .wrap {
      padding: 10px;
      line-height: 30px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>