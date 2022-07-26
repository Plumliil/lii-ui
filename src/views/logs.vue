<template>
    <div class="lii-logs">
        <h1>更新日志</h1>
        <div class="log" v-for="(item,index) in logs" :key="index">
            <!-- <div></div> -->
            <h3>{{item.type}}</h3>
            <div v-if="item.info">
                <div v-for="(item2,index2) in item.info" :key="index2">
                    <li>
                        <span>{{item2.type}}</span>
                        <ul>
                            <li style="margin-top:3px"
                                v-for="(item3,index3) in item2.describe"
                                :key="index3">
                                {{item3}}
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
    }
</script>
<script setup>
    import logs from '../assets/js/tags'
</script>

<style lang='less' scoped>
    .lii-logs {
        position: relative;
        height: 100vh;

        .log {
            position: relative;
            flex-direction: column;
            max-width: 800px;
            overflow: hidden;
            border: @baseBorder;
            margin: 20px 0;
            padding-bottom: 10px;

            h3 {
                position: relative;
                height: 50px;
                line-height: 50px;
                margin-top: 0;
                border-bottom: @baseBorder;
                text-indent: 20px;
            }

            div {
                position: relative;
                display: flex;
                flex-direction: column;
                padding-bottom:10px;
                div {
                    margin-top: -10px;
                    position: relative;
                    margin-left: 40px;
                    // height: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    li {
                        flex: 1;
                        height: 40px;
                        line-height: 40px;

                        ul {
                            margin: 0;

                            li {
                                list-style-type: circle;
                            }
                        }
                    }
                }
            }
        }
    }
</style>