import liiUpload from './index.vue'
liiUpload.install = app => {
    app.component(liiUpload.name, liiUpload)
}

export default liiUpload;