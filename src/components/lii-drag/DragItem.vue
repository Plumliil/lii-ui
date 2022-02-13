<template>
  <h1>lii-drag</h1>
  <div
    @dragstart.stop="onDragstart"
    @dragenter.stop="onDragenter"
    @dragend.stop="onDragend"
    draggable
    class="drag_item"
  >
    <slot></slot>
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
    onDragstart(index) {
      console.log("onDragstart", index);
      console.log(this.$el);
    },
    onDragenter(index) {
      console.log("onDragenter", index);
    },
    onDragend(index) {
      console.log("onDragend", index);
    },
  },
};
</script>
<style lang="less" scoped>
div {
  background-color: cadetblue;
  padding: 50px;
  margin: 15px;
  color: white;
  font-size: 30px;
  // transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
}
</style>