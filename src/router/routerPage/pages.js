export default[{
    path:"/",
    name:"home",
    component:()=>import("../../views/home.vue"),
    children:[
        {
            path:'info',
            name:'简介',
            component:()=>import('../../views/info.vue')
        },
        {
            path:'button',
            name:'button',
            component:()=>import('/packages/button/doc/doc.md')
        },
        {
            path:'input',
            name:'input',
            component:()=>import('/packages/input/doc/doc.md')
        },
    ]

}]