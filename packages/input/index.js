import liiInput from './index.vue';

liiInput.install = app => {
    app.component(liiInput.name, liiInput)
}

export default liiInput;