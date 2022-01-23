<template>
  <button
    ref="buttonRef"
    @click="$emit('click',[...args])"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "LiButton",
  inheritAttrs:false,
  created() {
      
  },
  data() {
    return {
      buttonRef: "",
      // size:this.size
    };
  },
  mounted() {
    if (this.$attrs.size === "little") {
      console.log(this.$refs.buttonRef);
    }
    if(this.$attrs.color){
        this.$refs.buttonRef.style.backgroundColor=this.$attrs.color;
    }
  },
};
</script>

<style lang="less" scoped>
    button{
        width:70px;
        height: 30px;
        outline: none;
    }
</style>