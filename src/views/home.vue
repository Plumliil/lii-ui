<template>
  <div class="home">
    <!-- <div class="nav">
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
    </div> -->
    <div class="container">
      <div class="left-menu">
        <li v-for="(item, index) in menus" :key="index" :class="{ active: activeIndex == index }"
          @click="switchMenu(item, index)">
          {{ menus[index]["name"] }}
        </li>
        <!-- <li v-for="(item, index) in menusPart1" :key="index" :class="{ active: activeIndex == index }"
          @click="switchMenu(item, index)">
          {{ menusPart1[index]["name"] }}
        </li>
        
        <li v-for="(item, index) in menusPart2" :key="index" :class="{ active: activeIndex == index }"
          @click="switchMenu(item, index)">
          {{ menusPart2[index]["name"] }}
        </li>
        
        <li v-for="(item, index) in menusPart3" :key="index" :class="{ active: activeIndex == index }"
          @click="switchMenu(item, index)">
          {{ menusPart3[index]["name"] }}
        </li> -->
      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    reactive
  } from "vue";
  import {
    useRouter
  } from "vue-router";
  import menuList from "../router/routerPage/pages.js";
  onMounted(() => {
    router.push({
      path: menus[activeIndex.value].path,
    });
  });
  const menus = menuList[0].children;
  const menusPart1 = reactive([]);
  const menusPart2 = reactive([]);
  const menusPart3 = reactive([]);
  menus.forEach((item, index) => {
    if (index < 4) {
      menusPart1.push(item)
    } else if (index > 4 && index < 6) {
      menusPart2.push(item)
    } else {
      menusPart3.push(item)
    }
  })
  // console.log(menusPart1);
  const router = useRouter();
  const activeIndex = ref(0);
  // console.log(menus);
  const switchMenu = (item, index) => {
    activeIndex.value = index;
    router.push({
      path: item.path,
    });
  };
</script>
<style lang='less' scoped>
  .home {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // .nav {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   width: 100%;
    //   height: 70px;
    //   line-height: 45px;
    //   border-bottom: @baseBorder;
    //   .nav-left,
    //   .nav-right {
    //     display: flex;
    //     align-items: center;
    //     width: 100%;
    //     height: 50px;
    //   }
    //   .nav-left {
    //     justify-content: left;
    //     img{
    //       margin-left: 100px;
    //     }
    //   }
    //   .nav-right {
    //     justify-content: right;
    //     .router-link{
    //       margin-left: 0;
    //     }
    //     h2{
    //       font-weight: 400;
    //       padding:0 10px;
    //     }
    //     a {
    //       height: 100%;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       margin-right: 120px;
    //       padding: 0 10px;
    //     }
    //   }
    // }
    .container {
      width: 80%;
      height: auto;
      display: flex;
      margin-bottom: 300px;

      .left-menu {
        min-width: 200px;
        height: auto;
        overflow-y: hidden;
        border-right: @baseBorder;
        font-size: 14px;

        li {
          height: 50px;
          // wid
          list-style: none;
          line-height: 50px;
          padding: 0 10px;
          cursor: pointer;
          text-indent: 10px;
          box-sizing: border-box;

          &.active {
            border-right: 2px solid #0e80eb;
            color: #0e80eb;
            background: rgba(14, 128, 235, 0.1);
          }
        }
      }

      .router-view {
        flex: 1;
        padding-left: 20px;
        border-right: @baseBorder;
      }
    }
  }
</style>