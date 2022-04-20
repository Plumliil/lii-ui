import liiTextarea from './textarea.vue'

liiTextarea.install = app => {
    app.component(liiTextarea.name, liiTextarea)
}

export default liiTextarea;