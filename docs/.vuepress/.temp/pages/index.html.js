export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png\",\"actionText\":\"快速上手 →\",\"actionLink\":\"/zh/`guide/\",\"features\":[{\"title\":\"易用\",\"details\":\"组件，指令使用简单，文档简明易懂\"},{\"title\":\"多样\",\"details\":\"组件种类多样，应用场景广泛\"},{\"title\":\"不断进步\",\"details\":\"通过不断的学习进步来完善组件以及指令\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1659284260000},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
