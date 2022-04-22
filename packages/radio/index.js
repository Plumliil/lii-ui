import liiRadio from './index.vue';

liiRadio.install=app=>{
    app.component(liiRadio.name,liiRadio)
}

export default liiRadio