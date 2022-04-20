import liiButton from './index.vue';

liiButton.install = app => {
    app.component(liiButton.name, liiButton)
}

export default liiButton;