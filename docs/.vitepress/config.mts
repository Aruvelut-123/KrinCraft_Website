import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft KrinCraft 服务器",
  description: "操作文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '食用文档', link: '/getting-started/' }
    ],

    sidebar: [
      {
        text: '食用文档',
        items: [
          { text: '😄KrinCraft 服务器介绍', link: '/getting-started/' },
          { text: '🗨️指令介绍', link: '/commands/' },
          { text: '🌻服务器领地功能食用教程', link: '/res/'},
          { text: '😃简化领地教程', link: 'res/res_lite'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kxkl2077/KrinCraft_Website' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/2012569194' }
    ]
  }
})
