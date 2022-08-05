app.directive('replace-img', {
    async beforeMount(el, {
        value
    }) {
        const imgUrl = value;
        if (imgUrl) {
            const exist = await imgIsExist(imgUrl);
            exist && el.setAttribute('src', imgUrl);
        }

        function imgIsExist(url) {
            return new Promise(resolve => {
                let img = new Image();
                img.src = url;
                img.onload = () => {
                    if (img.complete) {
                        resolve(true);
                        img = null;
                    }
                }
                img.onerror = () => {
                    resolve(false);
                    img = null;
                }
            })
        }
    }
})

