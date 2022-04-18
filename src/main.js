import { createApp } from 'vue'
import LiiUI from '../packages';
import App from './App.vue'

const app=createApp(App);

app.use(LiiUI)


app.mount('#app')
