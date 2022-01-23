import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import notice from './components/notice/notice'
// import LiButton from './plugins/LiButton.js'
// .use(LiButton)
createApp(App)
    .use(router)
    .use(notice)
    .mount('#app')