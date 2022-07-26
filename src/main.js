import { createApp } from 'vue'
import LiiUI from '../packages';
import { Message } from '../packages';
import App from './App.vue'
import router from './router/index.js'
import '../src/assets/styles/global.less'
const app=createApp(App);

app.use(LiiUI)
app.use(router)
app.mount('#app')
