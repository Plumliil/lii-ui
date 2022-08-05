app.directive('copy', {
    beforeMount(el, {
        value,
        arg
    }) {
        el.targetContent = value;
        const success = arg;
        el.addEventListener('click', () => {
            if (!el.targetContent && !el.textContent) return console.warn('没有需要复制的目标内容');
            const textarea = document.createElement('textarea');
            // 设置相关属性
            textarea.readOnly = 'readonly';
            textarea.style.position = 'fixed';
            textarea.style.top = '-99999px';
            textarea.value = el.targetContent || el.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            const res = document.execCommand('Copy');
            res && console.log('复制成功，剪贴板内容：' + value || el.textContent);
            res && success ? success(el.targetContent || el.textContent) : console.log('复制成功，剪贴板内容：' + el.targetContent || el.textContent);
            document.body.removeChild(textarea);
        }, true)
    },
    updated(el, {
        value
    }) {
        el.targetContent = value;
    },
    unmounted(el) {
        el.removeEventListener('click', () => {})
    }
})
