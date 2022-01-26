<template>
  <div class="lii-tree" v-for="(treeItem, index) in data" :key="index">
    <div class="lii-tree-content" @click="openChange(treeItem, index)" :class="currentIndex === index && treeItem.liiOpen ? 'currentClick' : ''">
      <a
        v-if="treeItem[this.props.children]"
        :class="currentIndex === index && treeItem.liiOpen ? 'transicon' : ''"
      ></a>
      <span>{{ treeItem[this.props.label] }}</span>
    </div>
    <transition name="treeTrs">
      <div
        class="lii-tree-children"
        v-if="treeItem[this.props.children] && treeItem.liiOpen"
        v-show="currentIndex === index"
      >
        <lii-tree
          :data="treeItem[this.props.children]"
          :props="this.props"
        ></lii-tree>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "LiiTree",
  props: {
    data: {
      type: Array,
      required: true,
    },
    props: {
      type: Object,
      required: false,
      default() {
        return {
          label: "label",
          children: "children",
        };
      },
    },
  },
  emits:['node-click'],
  data() {
    return {
      open: false,
      currentIndex: null,
    };
  },
  methods: {
    openChange(treeItem, index) {
      this.currentIndex = index;
      treeItem.liiOpen = !treeItem.liiOpen;
      // console.log(treeItem);
      this.$emit('node-click',treeItem)
    },
  },
};
</script>

<style lang="less" scoped>
.lii-tree {
  .lii-tree-content {
    position: relative;
    text-align: left;
    cursor: pointer;
    &:hover{
      background-color: #f5f7fa;
    }
    a {
      position: absolute;
      top: 5px;
      width: 0;
      height: 0;
      border-left: 5px solid black;
      border-right: 5px solid transparent;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      transition: .5s;
    }
    span {
      padding-left: 15px;
      display: inline-block;
      margin: 0 3px;
    }
    .transicon {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
      border-bottom: 5px solid transparent;
    }
  }
  .lii-tree-children {
    position: relative;
    margin-left: 20px;
    transform: all .5s ease;
    text-align: left;
  }
}
.currentClick{
  background-color: #f5f7fa;
}
.treeTrs-enter-from,
.treeTrs-leave-to{
  opacity: 0;
}
.treeTrs-enter-to,
.treeTrs-leave-from{
  opacity: 1;
}
.treeTrs-enter-active,
.treeTrs-leave-active{
  transform: all .5s ease;
}
.treeTrs-leave-active{
  position: absolute;
}
</style>