import liiButton from "./button";
import liiInput from "./input";
import liiTextarea from "./textarea";
import liiSpace from "./space";
import liiSelect from "./select";
import liiRadio from "./radio";
import Message from "./message";
import liiCollapse from './collapse';
import liiProgress from './progress';
import liiBadge from './badge';
import liiLoading from './loading';
import liiUpload from './upload';

// directives
import './directives/copy'
import './directives/img_lazy'
import './directives/img_replace'

const components = [
    liiButton,
    liiInput,
    liiSpace,
    liiTextarea,
    liiSelect,
    liiRadio,
    liiCollapse,
    liiProgress,
    liiBadge,
    liiLoading,
    liiUpload

    
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
    Message,
    liiCollapse,
    liiProgress,
    liiBadge,
    liiLoading,
    liiUpload
}
export default LiiUI;