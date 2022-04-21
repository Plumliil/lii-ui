import liiButton from "./button";
import liiInput from "./input";
import liiTextarea from "./textarea";
import liiSpace from "./space";
import liiSelect from "./select";
const components = [
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
    liiSelect
];
const install = app => {
    components.forEach(item => {
        app.use(item)
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
    liiSelect
}
export default LiiUI;