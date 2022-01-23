<template>
    <div>
        <h1>Button</h1>
        <button @click="clickMe({aaa:'aaa'})">原生</button>
        <LiButton :size='size' :color='color' @click="clickMe">LiButton</LiButton>
    </div>
</template>

<script>
import LiButton from '../components/LiButton'
export default {
    name:'Button',
    components:{LiButton},
    data(){
        return{
            size:'little',
            color:'pink'
        }
    },
    methods:{
        clickMe(e){
            alert('绑定点击事件');
            console.log(e);
        }
    }
}
</script>

<style>

</style>