import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import routerPage from './routerPage/pages'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[...routerPage]
})



export default router