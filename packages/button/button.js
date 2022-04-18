import liiButton from './button.vue';

liiButton.install = app => {
    app.component(liiButton.name, liiButton)
}

export default liiButton;