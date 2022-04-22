export default[{
    path:"/",
    name:"home",
    component:()=>import("../../views/home.vue"),
    children:[
        {
            path:'/',
            name:'简介',
            component:()=>import('../../views/info.vue')
        },
        {
            path:'button',
            name:'Button 按钮',
            component:()=>import('/packages/button/doc/doc.md')
        },
        {
            path:'input',
            name:'Input 输入框',
            component:()=>import('/packages/input/doc/doc.md')
        },
        {
            path:'space',
            name:'space 间距',
            component:()=>import('/packages/space/doc/doc.md')
        },
        {
            path:'textarea',
            name:'Textarea 文本域',
            component:()=>import('/packages/textarea/doc/doc.md')
        },
        {
            path:'select',
            name:'Select 下拉框',
            component:()=>import('/packages/select/doc/doc.md')
        },
        {
            path:'radio',
            name:'Radio 选择',
            component:()=>import('/packages/radio/doc/doc.md')
        },
    ]

}]