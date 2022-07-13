import liiColorPick from './index.vue'
liiColorPick.install = app => {
    app.component(liiColorPick.name, liiColorPick)
}

export default liiColorPick;