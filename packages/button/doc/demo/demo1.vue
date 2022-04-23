<template>
  <div>
    <div>
      <lii-button disabled></lii-button>
      <lii-button type="primary" disabled>主要按钮</lii-button>
      <lii-button type="success" disabled>成功按钮</lii-button>
      <lii-button type="info" disabled>信息按钮</lii-button>
      <lii-button type="warning" disabled>警告按钮</lii-button>
      <lii-button type="danger" disabled>危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain disabled>朴素按钮</lii-button>
      <lii-button type="primary" plain disabled>主要按钮</lii-button>
      <lii-button type="success" plain disabled>成功按钮</lii-button>
      <lii-button type="info" plain disabled>信息按钮</lii-button>
      <lii-button type="warning" plain disabled>警告按钮</lii-button>
      <lii-button type="danger" plain disabled>危险按钮</lii-button>
    </div>
  </div>
</template>

<script setup>
import liiButton from "../../index.vue";
</script>