<template>
  <div>
    <lii-button type="success" disabled>li</lii-button>
    <lii-button type="success" disabled circle>li</lii-button>
    <lii-button type="warning">li</lii-button>
    <lii-button type="primary" class="btn" size="middle" plain circle @click="tarchMe"
      >li</lii-button>
    <lii-input  />
    <!-- <lii-button  type="primary" size="middle" class="btn" plain>{{val}}</lii-button> -->
    <span>{{val}}</span>
    <lii-button type="danger">li</lii-button>
    <lii-button type="danger">li</lii-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      val: "x",
    };
  },
  methods: {
    tarchMe() {
      console.log(111);
    },
    aa(e) {
      console.log(e.target.value);
      // this.val=e.target.value
    },
  },
};
</script>
<script setup>
import liiButton from "../packages/button/button.vue";
import liiInput from "../packages/input/input.vue";
// const val=
</script>


<style  scoped>
.btn{
  /* margin-top: 300px; */
}
</style>