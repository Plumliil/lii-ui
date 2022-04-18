import liiButton from "./button/button";
import liiInput from "./input/input";

const install = app => {
    app.use(liiButton);
    app.use(liiInput);
}
const LiiUI={
    install,
}

// 按需导入
export {
    liiButton,
    liiInput
}
// 全部引入
export default LiiUI;