<template>
    <div class="lii-badge" ref="badge">
        <slot class="xxx"></slot>
        <span class="lii-badge-modify" :style="modifyStyle">
            {{badgeValue}}
        </span>
    </div>
</template>

<script>
    import {
        reactive,
        ref
    } from 'vue';
    export default {
        name: 'liiBadge',
    }
</script>
<script setup>
    const props = defineProps({
        value: {
            type: String || Number
        }
    })
    let badgeValue = ref(props.value);
    let modifyWidth = ref(0)
    let modifyStyle = reactive({
        'width': '20px',
        'border-radius': '50%'
    });
    let a = parseInt('a')
    console.log(a);
    console.log(badgeValue.value);
    if (badgeValue.value.length && badgeValue.value.length - 1 > 0) {
        if (parseInt(badgeValue.value) > 99) {
        badgeValue.value = '99+'
        modifyWidth = (badgeValue.value.length - 1) * 10 + 15 + 'px';
        modifyStyle = reactive({
            'width': '30px',
            'border-radius': '15px',
            'font-size': '6px'
        });
        } else {
            modifyWidth = (badgeValue.length - 1) * 10 + 15 + 'px';
            modifyStyle = reactive({
                // 'width': modifyWidth,
                'border-radius': '15px',
            });
        }
    } else {
        modifyStyle = reactive({
            'width': '15px',
            'height': '15px',
            'border-radius': '15px',
            'right': '10px'
        });
    }
</script>

<style lang='less'>
    // * {
    //     margin: 0;
    //     padding: 0;
    // }

    .lii-badge {
        position: relative;
        display: flex;
        font-size: 10px;

        .lii-badge-modify {
            position: relative;
            text-align: center;
            background-color: #f56c6c;
            color: aliceblue;
            height: 15px;
            right: 15px;
            line-height: 9px;
            padding: 3px;
        }
    }
</style>