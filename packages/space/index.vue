<template>
  <div class="lii-space">
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span @click="aa">2</span>
  </div>
</template>

<script>
import { h, ref, useSlots, computed } from "vue";
export default {
  name: "liiSpace",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Array,
      default: [10, 10],
    },
  },
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const tStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: props.inline
          ? `${props.size[0]}px`
          : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction":props.inline?"inherit":"column",
        "flex-wrap": "wrap",
        width: "100%",
      };
    });
    $slots.default().forEach((item, index) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "lii-space-item",
            style: 'width"100%',
          },
          item
        )
      );
    });
    return () => [
      h(
        "div",
        {
          className: "lii-space",
          style: tStyle.value,
        },
        slotList.value
      ),
    ];
  },
};
</script>



<style lang='less' scoped>
.lii-space {
  display: inline-flex;

  gap: 10px 10px;
}
</style>