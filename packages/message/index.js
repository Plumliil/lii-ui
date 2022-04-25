import {
    createVNode,render
} from 'vue';
import liiMessage from './index.vue';

function Message(options) {
    let userClos=options.onClose;
    let opts={
        ...options,
        onClose(){
            onClose?.();
        }
    }
    const container=document.createElement('div');
    const vm = createVNode(liiMessage,options);
    render(vm,container);
    document.body.appendChild(container.firstElementChild)
}
Message.install = app => {
    // 兼容vue2
    app.config.globalProperties.$message = Message;
}
export default Message