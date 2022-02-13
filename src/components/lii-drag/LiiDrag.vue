<template>
  <div ref="liiDrag" @dragenter.prevent @dragover.prevent>
    <!-- 阻止浏览器默认行为，不然会显示一个叉叉，不好看 -->
    <slot />
    xx
  </div>
</template>

<script>
let Emitter = require("tiny-emitter");
let emitter = new Emitter();
export default {
  name: "LiiDrag",
  created() {
    this.toDom = ""; // 拖拽时进入的元素
    this.fromDom = ""; // 拖拽起始元素
    this.children = []; // 存放所有子组件元素集合
    emitter.on("dragstart", this.onDragstart); // 先注册后触发
    emitter.on("dragenter", this.onDragenter); // 先注册后触发
    emitter.on("dragend", this.onDragend); // 先注册后触发
    emitter.on("putChild", (child) => {
      this.children.push(child);
    }); // 先注册后触发
  },
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    onDragstart(el) {
      this.fromDom = el;
      // console.log("onDragstart", index);
      // console.log(this.$el);
    },
    onDragenter(el) {
      this.toDom=el; // 拖拽会不停出发enter 所以要记录进入哪个元素
      if(this.fromDom===this.toDom) return;
      this.isPrevNode()
    },
    onDragend() {
      // console.log("onDragend", index);
    },
    // 判断to是否在from前
    isPrevNode(from,to){
      console.log(from);
      console.log(to);
    }
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
    display: inline-block;
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