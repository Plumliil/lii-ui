<template>
    <div class="liiProgress" :style="{width:width+'px'}">
        <div :class="liiProgressBar" :style="{'width':percentage+'%','background-color':colorChange}">
            <p v-if="showText" :class="percentText">{{props.percentage+'%'}}</p>
        </div>
    </div>
</template>

<script>
    import {
        ref,
        reactive

    } from '@vue/reactivity';
    import {
        onMounted,
        onUpdated,
        onActivated
    } from '@vue/runtime-core';
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
            type: String,
            default: 'line'

        },
        strokeWidth: {
            // 宽度
            type: Number,
        },
        textInside: {
            // 进度条显示文字内置在进度条内
            type: Boolean,
            default: false
        },
        status: {
            // 进度条状态
            type: String,
            default: 'primary'
        },
        showText: {
            // 是否显示进度条文字
            type: Boolean,
            default: true
        },
        color: {
            type: String
        },
        colors: {
            type: Array,
            default: () => []
        },
        value: {
            type: Array,
            default: []
        },
        width: {
            type: Number,
            default: 500
        }
    })
    let liiProgressBar = reactive([]);
    let percentText = reactive(['percentText'])
    let colorChange = ref('');
    if (props.type === 'line' && props.textInside === true) {
        liiProgressBar.push('liiProgress-bar-progressText')
    } else {
        liiProgressBar.push('liiProgress-bar')
    }
    if (props.status) {
        switch (props.status) {
            case 'primary':
                liiProgressBar.push('liiProgress-status-primary')
                break;
            case 'success':
                liiProgressBar.push('liiProgress-status-success')
                break;
            case 'warning':
                liiProgressBar.push('liiProgress-status-warning')
                break;
            case 'error':
                liiProgressBar.push('liiProgress-status-error')
                break;
            default:
                liiProgressBar.push('liiProgress-status-primary')
                break;
        }
    }
    if (props.type === 'line') {
        switch (props.textInside) {
            case false:
                percentText.push('liiProgress-bar-textOutside')
                break;
            case true:
                percentText.push('liiProgress-bar-textInside')
                break;
            default:
                percentText.push('liiProgress-bar-textOutside')
                break;
        }
    }

    if (props.color) {
        colorChange = props.color;
    } else if (props.colors) {
        props.colors.forEach(item => {
            if (props.percentage >= item.percentage) {
                colorChange = item.color
            }
        })
    }
</script>

<style lang='less'>
    .liiProgress {
        position: relative;
        width: 500px;
        height: auto;
        border: @baseBorder;
        border-radius: 30px;
        margin: 20px 0px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .liiProgress-bar {
            height: 6px;
            background-color: @primary;
            text-align: center;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            .liiProgress-bar-textOutside {
                position: absolute;
                right: -55px;
                text-align: right;
                line-height: 6px;
            }

            .liiProgress-bar-textOutside-type1 {
                position: absolute;
                right: -55px;
                text-align: right;
                line-height: 6px;
            }

            .liiProgress-bar-textOutside-type2 {
                text-align: right;
                margin-right: -55px;
                line-height: 6px;
            }


            .liiProgress-bar-textInside {
                width: 100%;
                background-color: red;
                position: absolute;
                right: -55px;
                top: -10px;
            }
        }

        .liiProgress-bar-progressText {
            width: 100%;
            height: 30px;
            border-radius: 20px;
            // margin: 20px 0;
            line-height: 30px;
            color: white;
            font-weight: 700;
            text-align: right;

        }

        .percentText {
            display: block;
            padding-right: 10px;
        }

        .liiProgress-status-primary {
            background-color: @primary;
        }

        .liiProgress-status-success {
            background-color: @success;
        }

        .liiProgress-status-warning {
            background-color: @warning;
        }

        .liiProgress-status-error {
            background-color: @error;
        }
    }
</style>