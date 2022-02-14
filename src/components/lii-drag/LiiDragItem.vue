<template>
  <h1>lii-drag</h1>
  <div
    @dragstart.stop="onDragstart"
    @dragenter.stop="onDragenter"
    @dragend.stop="onDragend"
    draggable
    class="drag_item"
  >
    <slot name="drag"></slot>
  </div>
</template>

<script>
import dragMixin from '../../mixins/dragMixin';
export default {
  name:'LiiDragItem',
  mixins:[dragMixin],
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
  mounted(){
    // this.$el 为当前组件实例对应的真实Dom
    // 触发LiiDrag组件上的putchild方法
    this.dispatch('LiiDrag','putChild',this.$el);
  },
  methods: {
    onDragstart() {
      this.$el.style.opacity = "0.3";
      this.dispatch("DragWrap", "dragstart", this.$el); // 触发dragstart
    },
    onDragenter() {
      this.dispatch("DragWrap", "dragenter", this.$el);  // 触发dragenter
    },
    onDragend() {
      this.$el.style.opacity = "1";
      this.dispatch("DragWrap", "dragend");  // 触发dragend
    }
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
  transition: 1s;
  cursor: pointer;
}
</style>