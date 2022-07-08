<template>
    <div class="liiProgress">
        <div class="liiProgress-bar" :style="{width:percentage+'%'}">
            <span class="percentNum">{{props.percentage+'%'}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'liiProgress',
    }
</script>
<script setup>
    const props = defineProps({
        percentage: {
            // 百分比
            type: Number,
        },
        type: {
            // 类型
            type: String
        },
        strokeWidth: {
            // 宽度
            type: Number,
        },
        textLine: {
            // 进度条显示文字内置在进度条内
            type: Boolean
        },
        status: {
            // 进度条状态
            type: String
        },
        showText: {
            // 是否显示进度条文字
            type: Boolean
        },
        value: {
            type: Array,
            default: []
        }
    })
</script>

<style lang='less' scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .liiProgress {
        position: relative;
        width: 500px;
        height: 10px;
        border: @baseBorder;
        border-radius: 10px;

        .liiProgress-bar {
            width: 0;
            height: 100%;
            background-color: aquamarine;
            text-align: center;
            border-radius: 10px;

            .percentNum {
                position: absolute;
                right: -50px;
                top: -7px;
            }
        }
    }
</style>