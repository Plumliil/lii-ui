import liiLoading from './index.vue'
liiLoading.install = app => {
    app.component(liiLoading.name, liiLoading)
}

export default liiLoading;