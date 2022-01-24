<template>
  <div class="button">
        <div>
      <lii-button></lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
      <lii-button type="info">信息按钮</lii-button>
      <lii-button type="warning">警告按钮</lii-button>
      <lii-button type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain></lii-button>
      <lii-button plain type="primary">主要按钮</lii-button>
      <lii-button plain type="success">成功按钮</lii-button>
      <lii-button plain type="info">信息按钮</lii-button>
      <lii-button plain type="warning">警告按钮</lii-button>
      <lii-button plain type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button round></lii-button>
      <lii-button round type="primary">主要按钮</lii-button>
      <lii-button round type="success">成功按钮</lii-button>
      <lii-button round type="info">信息按钮</lii-button>
      <lii-button round type="warning">警告按钮</lii-button>
      <lii-button round type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button circle>默</lii-button>
      <lii-button circle type="primary">主</lii-button>
      <lii-button circle type="success">成</lii-button>
      <lii-button circle type="info">信</lii-button>
      <lii-button circle type="warning">警</lii-button>
      <lii-button circle type="danger">危</lii-button>
    </div>
    <div>
      <lii-button disabled></lii-button>
      <lii-button disabled type="primary">主要按钮</lii-button>
      <lii-button disabled type="success">成功按钮</lii-button>
      <lii-button disabled type="info">信息按钮</lii-button>
      <lii-button disabled type="warning">警告按钮</lii-button>
      <lii-button disabled type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button disabled plain></lii-button>
      <lii-button disabled plain type="primary">主要按钮</lii-button>
      <lii-button disabled plain type="success">成功按钮</lii-button>
      <lii-button disabled plain type="info">信息按钮</lii-button>
      <lii-button disabled plain type="warning">警告按钮</lii-button>
      <lii-button disabled plain type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button disabled round></lii-button>
      <lii-button disabled round type="primary">主要按钮</lii-button>
      <lii-button disabled round type="success">成功按钮</lii-button>
      <lii-button disabled round type="info">信息按钮</lii-button>
      <lii-button disabled round type="warning">警告按钮</lii-button>
      <lii-button disabled round type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button disabled circle>默</lii-button>
      <lii-button disabled circle type="primary">主</lii-button>
      <lii-button disabled circle type="success">成</lii-button>
      <lii-button disabled circle type="info">信</lii-button>
      <lii-button disabled circle type="warning">警</lii-button>
      <lii-button disabled circle type="danger">危</lii-button>
    </div>
    <div>
      <lii-button></lii-button>
      <lii-button size="middle"></lii-button>
      <lii-button size="small"></lii-button>
      <lii-button size="mini"></lii-button>
      <lii-button round></lii-button>
      <lii-button round size="middle"></lii-button>
      <lii-button round size="small"></lii-button>
      <lii-button round size="mini"></lii-button>
      <lii-button circle round>默</lii-button>
      <lii-button circle round size="middle">默</lii-button>
      <lii-button circle round size="small">默</lii-button>
      <lii-button circle round size="mini">默</lii-button>
    </div>
    <lii-button class="liiBtn" @click="liiBtn">点击事件</lii-button>
  </div>
</template>

<script>
import LiiButton from "../components/lii-button/LiiButton.vue";
export default {
  name: "Button",
  components: { LiiButton },
  data() {
    return {
      size: "little",
      color: "pink",
    };
  },
  methods:{
    liiBtn(e){
      console.log(e.target.value);
    },
    btn(e){
      console.log(e.target.value);
    }
  }
};
</script>

<style scoped lang="less">
button {
  margin: 3px;
}
.liiBtn{
  color: red;
}
</style>