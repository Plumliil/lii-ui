export const themeData = JSON.parse("{\"logo\":\"https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png\",\"repo\":\"https://github.com/Plumliil/lii-ui\",\"repoLabel\":\"GitHub\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"参考\",\"children\":[{\"text\":\"组 件\",\"link\":\"/reference/components/button\"},{\"text\":\"插 件\",\"link\":\"/reference/plugins/\"},{\"text\":\"指 令\",\"link\":\"/reference/directives/\"}]},{\"text\":\"生态系统\",\"children\":[{\"text\":\"Vue3.x\",\"link\":\"https://v3.cn.vuejs.org/\"},{\"text\":\"Vuepress\",\"link\":\"https://vuepress.vuejs.org/zh/\"}]}],\"sidebar\":{\"/guide/\":[{\"title\":\"文档指南\",\"collapsable\":true,\"children\":[\"/guide/init\"]},{\"title\":\"设计原则\",\"collapsable\":true,\"children\":[\"/guide/start\"]}],\"/reference/components/\":[{\"title\":\"组件\",\"collapsable\":true,\"children\":[]},{\"children\":[\"/reference/components/button\"]},{\"collapsable\":true,\"children\":[\"/reference/components/input\"]},{\"collapsable\":true,\"children\":[\"/reference/components/space\"]},{\"collapsable\":true,\"children\":[\"/reference/components/textarea\"]},{\"collapsable\":true,\"children\":[\"/reference/components/select\"]},{\"collapsable\":true,\"children\":[\"/reference/components/radio\"]},{\"collapsable\":true,\"children\":[\"/reference/components/badge\"]},{\"collapsable\":true,\"children\":[\"/reference/components/loading\"]},{\"collapsable\":true,\"children\":[\"/reference/components/upload\"]}],\"/reference/plugins/\":[{\"title\":\"插件\",\"collapsable\":true,\"children\":[\"/reference/plugins/one\",\"/reference/plugins/two\",\"/reference/plugins/three\"]}]},\"editLink\":false,\"editLinkText\":\"编辑此页\",\"editLinkPattern\":\"\",\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"更新时间\",\"contributors\":false,\"contributorsText\":\"贡献者\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleDarkMode\":\"切换夜间模式\",\"toggleSidebar\":\"切换侧边栏\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"toggleColorMode\":\"toggle color mode\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
