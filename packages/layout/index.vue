<template>
    <div>
        <div class="lii-loader">
            <!-- <div :class="loaderClass" v-if="props.type==='lii-loader-one'&&isLoading">
                <span class="ball1"></span>
                <span class="ball2"></span>
                <span class="ball3"></span>
                <span class="ball4"></span>
                <span class="ball5"></span>
            </div> -->
            <div :class="loaderClass" v-if="props.type==='loader-two'&&isLoading">
                <!-- <div class="lii-loader-two one"> -->
                <span></span>
                <span></span>
                <!-- </div> -->
                <!-- <div class="lii-loader-two two">
                    <span></span>
                    <span></span>
                </div> -->
            </div>
            <div :class="loaderClass" v-if="props.type==='loader-three'&&isLoading">
                <span></span>
                <span></span>
            </div>
            <div :class="loaderClass" v-if="props.type==='loader-four'&&isLoading">
                <h2 :data-text="props.value">{{props.value}}</h2>
            </div>
            <div :class="loaderClass" v-if="props.type==='loader-five'&&isLoading">
                <div class="loader-five-box">
                    <div class="loader-five-cube"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        reactive
    } from '@vue/reactivity';
    export default {
        name: '',
    }
</script>
<script setup>
    const props = defineProps({
        isLoading: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'big'
        },
        value: {
            type: String,
            default: 'Loading...'
        }
    })
    const loaderClass = reactive([props.type]);
    switch (props.size) {
        case 'mini':
            loaderClass.push('lii-loader--mini');
            break;
        case 'mid':
            loaderClass.push('lii-loader--mid');
            break;
        case 'big':
            loaderClass.push('lii-loader--big');
            break;

        default:
            loaderClass.push('lii-loader--small');
            break;
    }
    console.log(loaderClass);
</script>

<style lang='less' scoped>
    .lii-loader {
        display: flex;
        justify-content: center;
        align-items: center;

        .loader-one {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 auto;
            position: relative;
            border: baseBorder;
            -webkit-animation: turn 2s linear infinite;

            span {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                // background: black;
                position: absolute;
                // -webkit-animation: changeBgColor 2s linear infinite;
            }

            .ball1 {
                top: 0;
                left: 0;
                background: #fa7d3c;
                // -webkit-animation: changeBgColor1 4s linear infinite;
            }

            .ball2 {
                left: 25px;
                background: #47a8ed;
                ;
                // -webkit-animation: changeBgColor2 4s linear infinite;
            }

            .ball3 {
                top: 25px;
                left: 25px;
                background: #fb7299;
                // -webkit-animation: changeBgColor3 4s linear infinite;
            }

            .ball4 {
                top: 25px;
                left: 0;
                background: #0066ff;
                // -webkit-animation: changeBgColor4 4s linear infinite;
            }

            .ball5 {
                top: 12.5px;
                left: 12.5px;
                background: #e10602;
                // -webkit-animation: changeBgColor5 4s linear infinite;
            }

            @-webkit-keyframes turn {
                0% {
                    border: 1px solid #fa7d3c;
                    -webkit-transform: rotate(0deg);
                }

                20% {
                    border: 1px solid #e10602;
                    -webkit-transform: rotate(72deg);
                }

                40% {
                    border: 1px solid #fb7299;
                    -webkit-transform: rotate(144deg);
                }

                60% {
                    border: 1px solid #0066ff;
                    -webkit-transform: rotate(216deg);
                }

                80% {
                    border: 1px solid #47a8ed;
                    -webkit-transform: rotate(288deg);
                }

                100% {
                    border: 1px solid #fa7d3c;
                    -webkit-transform: rotate(360deg);
                }
            }

            .lii-loader-one--mini {
                transform: scale(.8);
            }

            .lii-loader-one--small {
                transform: scale(1);
            }

            .lii-loader-one--mid {
                transform: scale(1.2);
            }

            .lii-loader-one--big {
                transform: scale(1.5);
            }
        }

        .loader-two {
            position: relative;
            width: 50px;
            height: 50px;
            margin: 30px;

            // transform: scale(.8);
            span {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #5989ff;
                border-radius: 50%;
                animation: animate ease-in-out 2s infinite;

                &:before {
                    content: '';
                    position: absolute;
                    bottom: -40px;
                    left: -20%;
                    width: 140%;
                    height: 10px;
                    border-radius: 50%;
                    background: radial-gradient(rgba(0, 0, 0, .04), transparent, transparent);
                }

                &:nth-child(2) {
                    background: rgba(56, 109, 241, .05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, .1);
                    animation-delay: -1s;
                }
            }

            @keyframes animate {

                0%,
                100% {
                    transform: translateX(-20px);
                }

                50% {
                    transform: translateX(20px);
                }
            }

            // &.lii-loader-size--mini {
            //     transform: scale(.5);
            // }

            // &.lii-loader-size--small {
            //     transform: scale(.8);
            // }

            // &.lii-loader-size--mid {
            //     transform: scale(1);
            // }

            // &.lii-loader-size--big {
            //     transform: scale(1.2);
            // }

        }

        .loader-three {
            // background-color: #fa7d3c;
            position: relative;
            width: 50px;
            height: 50px;
            margin: 30px;
            // background-color: #fa7d3c;

            // transform: scale(.8);
            span {
                // position: absolute;
                // // background-color: #fa7d3c;
                // top: 0;
                // left: 0;
                // width: 100%;
                // height: 100%;
                // // background-color: #5989ff;
                // border-radius: 50%;
                // animation: animate ease-in-out 2s infinite;

                &:nth-child(1) {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 3px;
                    right: 3px;
                    left: 3px;
                    bottom: 3px;
                    border-radius: 50%;
                    background: rgba(233, 30, 90, .05);
                    backdrop-filter: blur(10px);
                    z-index: 2;
                    // opacity: 0;

                    &:before {
                        content: '';
                        position: absolute;
                        bottom: -20px;
                        left: -10%;
                        width: 150%;
                        height: 40px;
                        border-radius: 50%;
                        background: radial-gradient(rgba(0, 0, 0, .04), transparent, transparent);
                    }
                }

                &:nth-child(2) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 110%;
                    height: 110%;
                    border-radius: 50%;
                    display: block;
                    z-index: 1;
                    overflow: hidden;
                    animation: rotateCircle 1s linear infinite;

                    &:before {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 100%;
                        height: 100%;
                        background-color: #ff6189;
                    }
                }
            }

            @keyframes rotateCircle {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

        }

        .loader-four {
            h2 {
                position: relative;
                font-size: 24px;
                font-weight: 700;
                color: #252839;
                -webkit-text-stroke: 1px #383d52;

                &::before {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: @primary;
                    -webkit-text-stroke: 0vw #383d52;
                    border-right: 2px solid @primary;
                    overflow: hidden;
                    animation: lii-loaderFour 6s linear infinite;
                }
            }

            @keyframes lii-loaderFour {

                0%,
                10%,
                100% {
                    width: 0;
                }

                70%,
                90% {
                    width: 100%;
                }
            }
        }

        .loader-five {
            position: relative;
            width: 100%;
            width: 50px;
            height: 50px;

            .loader-five-box {
                position: relative;
                display: flex;
                // left: -200px;
                // left: 10px;
                top: 18px;
                transform: rotate(-35deg);
                justify-content: center;
                align-items: center;
                // width: calc(100%+400px);
                -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);

                .loader-five-cube {
                    position: relative;
                    width: 25px;
                    height: 25px;
                    // background: #03e9f4;
                    // transform-origin: bottom right;
                    // box-shadow:
                    //     0 0 5px rgba(3, 233, 244, 1),
                    //     0 0 25px rgba(3, 233, 244, 1),
                    //     0 0 50px rgba(3, 233, 244, 1),
                    //     0 0 100px rgba(3, 233, 244, 1),
                    //     0 0 200px rgba(3, 233, 244, .5),
                    //     0 0 300px rgba(3, 233, 244, .5);
                    background: black;
                    transform-origin: bottom right;
                    box-shadow:
                        0 0 5px rgba(0, 0, 0, 1),
                        0 0 25px rgba(0, 0, 0, 1),
                        0 0 50px rgba(0, 0, 0, 1),
                        0 0 100px rgba(0, 0, 0, 1),
                        0 0 200px rgba(0, 0, 0, .5),
                        0 0 300px rgba(0, 0, 0, .5);
                    animation: loaderFive 1s ease-in-out infinite;
                }

                @keyframes loaderFive {
                    0% {
                        transform: rotate(0deg);
                    }

                    60% {
                        transform: rotate(90deg);
                    }

                    65% {
                        transform: rotate(85deg);
                    }

                    70% {
                        transform: rotate(90deg);
                    }

                    75% {
                        transform: rotate(87.5deg);
                    }

                    80%,
                    100% {
                        transform: rotate(90deg);
                    }
                }
            }
        }

        .lii-loader--mini {
            transform: scale(.5);
        }

        .lii-loader--small {
            transform: scale(.8);
        }

        .lii-loader--mid {
            transform: scale(1);
        }

        .lii-loader--big {
            transform: scale(1.2);
        }
    }
</style>