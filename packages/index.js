import liiButton from "./button";
import liiInput from "./input";
import liiTextarea from "./textarea";
import liiSpace from "./space";
import liiSelect from "./select";
import liiRadio from "./radio";
const components = [
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
    liiSelect,
    liiRadio
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
    liiSelect,
    liiRadio
}
export default LiiUI;