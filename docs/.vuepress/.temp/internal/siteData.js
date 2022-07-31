export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Lii-Ui\",\"description\":\"一套基于 Vue 3.0 的组件库\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/css/style.css\"}],[\"script\",{\"charset\":\"utf-8\",\"src\":\"/js/main.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
