<template>
    <div class="lii-index">
        <div class="container">
            <div class="logo">
                <img src="../assets/imgs/LiiUi.png" alt="">
                <p> Lii，一套基于 Vue 3.0 的组件库</p>

            </div>
            <div class="info">
                <div>
                    <h3>自定义</h3>
                    <p>通过改变参数来得到满意的组件</p>
                </div>
                <div>
                    <h3>易用</h3>
                    <p>安装使用简单，文档简明易懂</p>
                </div>
                <div>
                    <h3>多样</h3>
                    <p>组件种类多样，应用场景广泛</p>
                </div>
            </div>
            <div class="content">
               
            </div>
            <div class="start">
                <router-link to="home">开始</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../router';

    export default {
        setup() {}
    }
</script>
<script setup>
    const aa = () => {
        router.push({
            name: '/home'
        })
    }
</script>
<style lang='less' scoped>
    .lii-index {
        height: 93vh;
        // background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .container {
            max-width: 1020px;
            height: 100%;
            // background-color: aqua;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .logo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            font-size: 24px;

            img {
                width: 200px;
                margin-top: 50px;
            }
        }

        // .info {
        //     flex: 1;
        //     font-size: 24px;
        // }

        .info {
            flex: 1;
            display: flex;
            margin-top: 100px;

            div {
                width: 250px;
                height: 150px;
                text-align: center;
                font-size: 20px;
                margin: 0px 20px;
                box-shadow: @baseShadow;
                border: @baseBorder;
                border-radius: @baseRaduis;
                padding: 10px;

                h3 {
                    font-size: 26px;
                    margin-top: -1px;
                }

                p {
                    text-align: left;
                    text-indent: 20px;
                }
            }
        }

        .start {
            flex: 1;
            text-decoration: none;
            color: black;
            text-align: center;
            line-height: 30px;

            a {
                display: block;
                height: 50px;
                width: 150px;
                line-height: 50px;
                font-size: 24px;
                font-weight: 700;
                margin-top: 50px;
                text-decoration: none;
                border: @baseBorder;
                border-radius: @baseRaduis;
                color: black;
                transition: .5s ease-in-out;
                &:hover{
                    background-color: black;
                    color: white;
                }
            }
        }
    }
</style>