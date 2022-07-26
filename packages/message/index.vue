<template>
  <transition name="lii-message-fade">
    <div class="lii-message" v-show="visible" :class="classs">我是message</div>
  </transition>
</template>

<script>
import { computed, ref, onMounted,onUnmounted } from "vue";
export default {
  name: "liiMessage",
};
</script>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "info",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  center: {
    type: String,
    default: "",
  },
  onColor: {
    type: Function,
  },
  offset: {
    type: Number,
    default: 20,
  },
});
onMounted(() => {
  visible.value = true;
  startTimer();
});
onUnmounted(() => {
  clearTimeout(timer);
})
let timer=null;
const visible = ref(false);
const startTimer = () => {
  timer=setTimeout(() => {
    visible.value = false;
  }, props.duration);
};
const classs = computed(() => [
  "lii-message--" + props.type,
  props.center ? "is-center" : "",
]);
</script>

<style lang='less'>
.lii-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  min-width: 300px;
  height: 50px;
  text-indent: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @success;
  color: #f0f0f0;
  transition: all 0.3s linear;
}
.lii-message-fade-enter-from,
.lii-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>