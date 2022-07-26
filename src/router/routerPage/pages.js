export default [{
        path: "/home",
        name: "home",
        component: () => import("../../views/home.vue"),
        children: [
            {
                path: '/logs',
                name: '更新日志',
                component: () => import('../../views/logs.vue')
            },
            {
                path: '/init',
                name: '安装使用',
                // component: () => import('../../views/init.vue')
                component: () => import('/packages/init/doc/doc.md')
            },
            {
                path: '/button',
                name: 'Button 按钮',
                component: () => import('/packages/button/doc/doc.md')
            },
            {
                path: '/input',
                name: 'Input 输入框',
                component: () => import('/packages/input/doc/doc.md')
            },
            {
                path: '/space',
                name: 'Space 间距',
                component: () => import('/packages/space/doc/doc.md')
            },
            {
                path: '/textarea',
                name: 'Textarea 文本域',
                component: () => import('/packages/textarea/doc/doc.md')
            },
            {
                path: '/select',
                name: 'Select 下拉框',
                component: () => import('/packages/select/doc/doc.md')
            },
            {
                path: '/radio',
                name: 'Radio 单选',
                component: () => import('/packages/radio/doc/doc.md')
            },
            // {
            //     path: '/message',
            //     name: 'Message 消息',
            //     component: () => import('/packages/message/doc/doc.md')
            // },
            {
                path: '/collapse',
                name: 'Collapse 手风琴',
                component: () => import('/packages/collapse/doc/doc.md')
            },
            // {
            //     path:'search',
            //     name:'Search 搜索框',
            //     component:()=>import('/packages/search/doc/doc.md')
            // },
            // {
            //     path: '/colorPick',
            //     name: 'ColorPick 颜色选择',
            //     component: () => import('/packages/colorPick/doc/doc.md')
            // },
            {
                path: '/progress',
                name: 'Progress 进度条',
                component: () => import('/packages/progress/doc/doc.md')
            },
            {
                path: '/badge',
                name: 'Badge 标记',
                component: () => import('/packages/badge/doc/doc.md')
            },

            {
                path: '/loading',
                name: 'Loading 加载动画',
                component: () => import('/packages/loading/doc/doc.md')
            },
            {
                path: '/upload',
                name: 'Upload 文件选择上传',
                component: () => import('/packages/upload/doc/doc.md')
            },

        ]
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../../views/index.vue')
    },
    
]