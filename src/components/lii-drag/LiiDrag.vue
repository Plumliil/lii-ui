<template>
  <div @dragenter.prevent @dragover.prevent>
    <div
      class="drag-item"
      v-for="(item, index) in newList"
      :key="index"
      ref="dragItem"
      @dragstart.stop="onStart(index)"
      @dragenter.stop="onEnter(index)"
      @dragend.stop="onEnd(index)"
      draggable
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Drag",
  created() {
    console.log(this.$attrs);
  },
  emits:['watchData'],
  data() {
    return {
      newList: this.$attrs.data,
      dragFrom: null,
      dragTo: null,
      isDrag: false,
    };
  },
  methods: {
    onStart(index) {
      this.dragFrom = index;
      console.log('onStart');
    },
    onEnter(index) {
      this.dragTo = index;
      this.$refs["dragItem"].forEach((item) => {
        item.style.opacity = 1;
        item.style.animation = "";
      });
      this.$refs["dragItem"][index].style.opacity = 0.8;
      this.$refs["dragItem"][index].style.animation = "shake 0.3s";
    },
    onEnd(index) {
      console.log("onEnd", index);
      let temp = this.newList[this.dragTo];
      this.newList[this.dragTo] = this.newList[this.dragFrom];
      this.newList[this.dragFrom] = temp;
      this.$refs["dragItem"][this.dragTo].style.opacity = 1;
      this.$emit('watchData',this.newList)
    },
  },
};
</script>

<style scoped>
div {
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.drag-item {
  display: block;
  background-color: pink;
  /* padding: 50px; */
  width: 100px;
  margin: 3px;
  cursor: pointer;
  /* transition: 0.5s; */
}

@keyframes shake {
  0% {
    transform: translate3d(-10%, 0, 0);
  }
  50% {
    transform: translate3d(10%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style> 