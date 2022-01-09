import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import liui from 'lii-ui'
createApp(App)
    .use(router)
    .use(liui)
    .mount('#app')
