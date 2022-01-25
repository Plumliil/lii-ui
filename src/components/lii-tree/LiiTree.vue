<template>
  <div class="lii-tree" v-for="(treeItem, index) in data" :key="index">
    <div class="lii-tree-content" @click="openChange(index)">
      <a v-if="treeItem[this.props.children]" :class="currentIndex === index && open ?'transicon':''"></a>
      <span>{{ treeItem[this.props.label] }}</span>
    </div>
    <div
      class="lii-tree-children"
      v-if="treeItem[this.props.children] && open"
      v-show="currentIndex === index"
    >
      <lii-tree :data="treeItem[this.props.children]" :props="this.props"></lii-tree>
    </div>
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
        }
      },
    },
  },
  data() {
    return {
      open: false,
      currentIndex: null,
    };
  },
  methods: {
    openChange(index) {
      this.currentIndex = index;
      this.open = !this.open;
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
    a{
      position: absolute;
      top: 5px;
      width: 0;
      height: 0;
      border-left: 5px solid black ;
      border-right: 5px solid transparent ;
      border-top: 5px solid transparent ;
      border-bottom: 5px solid transparent ;
      transition: 1s;
    }
    span {
      padding-left: 15px;
      display: inline-block;
      margin: 0 3px;
    }
    .transicon{
      border-left: 5px solid transparent ;
      border-right: 5px solid transparent ;
      border-top: 5px solid black ;
      border-bottom: 5px solid transparent ;
    }
  }
  .lii-tree-children {
    margin-left: 20px;
    transition: 1s;
  }
}
// .active{}
</style>