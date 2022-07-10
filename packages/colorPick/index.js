import liiCollapse from './index.vue'
liiCollapse.install = app => {
    app.component(liiCollapse.name, liiCollapse)
}

export default liiCollapse;