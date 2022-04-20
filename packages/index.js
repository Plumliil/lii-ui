import liiButton from "./button/button";
import liiInput from "./input/input";
import liiTextarea from "./textarea/textarea";

const components = [liiButton, liiInput, liiTextarea];

const install = app => {
    components.forEach(item => {
        app.use(item)
    })
}
const LiiUI = {
    install,
}

// 按需导入
export {
    liiButton,
    liiInput,
    liiTextarea
}
// 全部引入
export default LiiUI;