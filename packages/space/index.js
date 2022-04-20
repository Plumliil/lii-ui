import liiSpace from './index.vue'

liiSpace.install = app => {
    app.component(liiSpace.name, liiSpace)
}

export default liiSpace;