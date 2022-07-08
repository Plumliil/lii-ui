import liiProgress from './index.vue'
liiProgress.install = app => {
    app.component(liiProgress.name, liiProgress)
}

export default liiProgress;