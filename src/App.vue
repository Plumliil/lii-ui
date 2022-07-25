<template>
  <div class="nav">
    <div class="nav-left">
      <img src="./assets/imgs/LiiUi.png" style="width: 50px; height: 50px" alt="" />
      <h1>LiiUI</h1>
    </div>
    <div class="nav-right">

      <a href="">首页</a>
      <router-link to="init">开始</router-link>
      <router-link to="logs">更新日志</router-link>
      <a href="">问题反馈</a>
      <a href="https://github.com/Plumliil/lii-ui">
        <img src="./assets/imgs/github.png" style="width: 40px; height: 40px" alt="" />
      </a>
    </div>
  </div>
  <router-view></router-view>
</template>


<script>
  export default {};
</script>
<script setup>
</script>


<style lang="less">
  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 1px;
      /*高宽分别对应横竖滚动条的尺寸*/
    }

    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      background: #006699;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 60px;
      line-height: 45px;
      border-bottom: @baseBorder;

      .nav-left,
      .nav-right {
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
      }

      .nav-left {
        justify-content: left;

        img {
          margin-left: 100px;
          width: 50px;
          height: 50px;
        }
      }

      .nav-right {
        justify-content: right;

        .router-link {
          margin-left: 0;
        }

        h2 {
          font-weight: 400;
          padding: 0 10px;
        }

        a {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          padding: 0 10px;
          text-decoration: none;
          color: black;
        }
      }
    }
  }
</style>