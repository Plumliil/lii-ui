import liiBadge from './index.vue'
liiBadge.install = app => {
    app.component(liiBadge.name, liiBadge)
}

export default liiBadge;