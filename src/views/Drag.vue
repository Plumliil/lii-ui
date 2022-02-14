<template>
  <h1>Drag</h1>
  <lii-drag :data="list" @watchData="watchData"></lii-drag>
</template>

<script>
import LiiDrag from "../components/lii-drag/LiiDrag.vue";
export default {
  components: { LiiDrag },
  data(){
      return {
          list:[11,2,3,4,5,9,6]
      }
  },
  methods:{
      watchData(data){
          console.log(data);
      }
  }
};
</script>

<style>
</style>