module.exports = [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    {
        text: '参考', children: [
            { text: '组 件', link: '/reference/components/button' },
            { text: '插 件', link: '/reference/plugins/' },
            { text: '指 令', link: '/reference/directives/' },
        ]
    },
    {
        text: '生态系统', children: [
            { text: 'Vue3.x', link: 'https://v3.cn.vuejs.org/' },
            { text: 'Vuepress', link: 'https://vuepress.vuejs.org/zh/' },
        ]
    },
];
