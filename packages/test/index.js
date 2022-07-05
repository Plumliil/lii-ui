import liiTextarea from './index.vue'

liiTextarea.install = app => {
    app.component(liiTextarea.name, liiTextarea)
}

export default liiTextarea;