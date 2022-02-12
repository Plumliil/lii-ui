<template>
  <h1>lii-drag</h1>
  <div>
    <span
      v-for="(item, index) in nums"
      :key="index"
      @dragstart.stop="onDragstart"
      @dragenter.stop="onDragenter"
      @dragend.stop="onDragend"
      draggable
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
      onDragstart(){
          console.log('onDragstart');
      },
      onDragenter(){},
      onDragend(){}
  },
};
</script>
<style lang="less" scoped>
div {
  background-color: aquamarine;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background-color: cadetblue;
    padding: 50px;
    margin: 15px;
    color: white;
    font-size: 30px;
    // transform: scale(1.2);
    transition: 1s;
    cursor: pointer;
  }
}
</style>