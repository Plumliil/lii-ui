import liiButton from "./button";
import liiInput from "./input";
import liiTextarea from "./textarea";
import liiSpace from "./space";
import liiSelect from "./select";
import liiRadio from "./radio";
import Message from "./message";
const components = [
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
    liiSelect,
    liiRadio,
];
const plugins = [
    Message,
]
const install = app => {
    components.forEach(component => {
        app.use(component)
    })
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}
const LiiUI = {
    install,
}
export {
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
    liiSelect,
    liiRadio,
    Message
}
export default LiiUI;