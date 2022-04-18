<template>
  <div class="nav">nav</div>
  <div class="container">
    <div class="left-menu">
      <li
        v-for="(item, index) in menus"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="switchMenu(item, index)"
      >
        {{ menus[index]["name"] }}
      </li>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import menuList from "../router/routerPage/pages.js";
const menus = menuList[0].children;
const router = useRouter();
const activeIndex = ref(0);
const switchMenu = (item, index) => {
  activeIndex.value = index;
  router.push({
    path: item.path,
  });
};
</script>
<style lang='less' scoped>
.nav {
  display: flex;
  width: 100%;
  height: 45px;
  line-height: 45px;
  // background-color: red;

  border-bottom: 1px solid #f0f0f0;
}
.container {
  width: 1100%;
  height: auto;
  display: flex;
  .left-menu {
    width: 250px;
    height: auto;
    overflow-y: hidden;
    border-right: 1px solid #f0f0f0;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
      box-sizing: border-box;
      &.active {
        border-right: 3px solid #0e80eb;
        color: #0e80eb;
        background: rgba(14, 128, 235, 0.1);
      }
    }
  }
  .router-view {
    flex: 1;
    margin-left: ;
  }
}
</style>