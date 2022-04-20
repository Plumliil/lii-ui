import liiButton from "./button";
import liiInput from "./input";
import liiTextarea from "./textarea";
import liiSpace from "./space";
const components = [
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
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
    liiTextarea
}
export default LiiUI;