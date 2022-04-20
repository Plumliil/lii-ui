<template>
  <div class="nav">
    <div class="nav-left">
      <img
        src="../assets/imgs/logo.png"
        style="width: 80px; height: 80px"
        alt=""
      />
      <h1>LiiUI</h1>
    </div>
    <div class="nav-right">
      <a href="https://github.com/Plumliil/lii-ui">
        <img
          src="../assets/imgs/github.png"
          style="width: 40px; height: 40px"
          alt=""
        />
      </a>
    </div>
  </div>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import menuList from "../router/routerPage/pages.js";
onMounted(() => {
  router.push({
    path: menus[activeIndex.value].path,
  });
});
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 45px;
  border-bottom: 1px solid #f0f0f0;
  .nav-left,
  .nav-right,
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  .nav-left {
    justify-content: left;
  }
  .nav-right,
  a {
    justify-content: right;
    margin-right: 10px;
  }
}
.container {
  width: 100%;
  height: auto;
  display: flex;
  .left-menu {
    width: 350px;
    height: auto;
    overflow-y: hidden;
    border-right: 1px solid #f0f0f0;
    li {
      list-style: none;
      line-height: 45px;
      padding: 0 10px;
      cursor: pointer;
      text-indent: 10px;
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
    padding-left: 20px;
  }
}
</style>