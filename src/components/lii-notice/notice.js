import Vue from 'vue';
import Notice from './LiiNotice.vue';
const NoticeContructor = Vue.extend(Notice);
export default function notice(options) {
    /*
    options:{
        title:'',
        message:''
    }
    */
    // 1.实例化a
    const instacne = new NoticeContructor();
    // 2.手动挂载
    instacne.mount();
    // 挂载到body
    console.log(options);
    document.body.appendChild(instacne.$el);
    return instacne;
}