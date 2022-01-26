<template>
  <div>
    <lii-tree :data="geographic" :props="defaultProps" @node-click="nodeClick(item)"></lii-tree>
  </div>
</template>

<script>
import LiiTree from "../components/lii-tree/LiiTree.vue";
export default {
  components: { LiiTree },
  data() {
    return {
      geographic: [
        {
          name: "中国",
          region: [
            {
              name: "南方",
              region: [
                {
                  name: "江苏",
                },
                {
                  name:'浙江'
                },
              ],
            },
            {
              name: "北方",
              region: [
                {
                  name: "黑龙江",
                },
                {
                  name: "漠河",
                },
              ],
            },
          ],
        },
      ],
      defaultProps:{
        label:'name',
        children:'region'
      }
    };
  },
  methods:{
    nodeClick(item){
      console.log(item);
    }
  }
};
</script>

<style scoped>
</style>