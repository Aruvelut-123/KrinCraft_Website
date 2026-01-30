import { defineConfig } from 'vitepress'
import dayjs from 'dayjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh_CN',
  title: "Minecraft KrinCraft 服务器",
  description: "操作文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '食用文档', link: '/getting-started/' },
      { text: '论坛', link: 'https://forum.kxkl2024.cn' }
    ],

    sidebar: [
      {
        text: '食用文档',
        items: [
          { text: '😄KrinCraft 服务器介绍', link: '/getting-started/' },
          { text: '🗨️指令介绍', link: '/commands/' },
          { text: '💰货币介绍', link: '/money/' },
          { text: '🎮街机介绍', link: '/bnes/' },
          { text: '🐧互通介绍', link: '/QGroup/' }
        ]
      }
    ],
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kxkl2077/KrinCraft_Website' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/2012569194' },
      { icon: 'qq',link: 'https://qm.qq.com/q/rcC29iyJk' }
    ],
    footer: { // 页脚
      message: '基于 MIT 协议发表。',
      copyright: `Copyright © ${dayjs().format("YYYY")} Kxkl2077`
    },
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '目录'
    },
    search: {
      provider: 'local',
    },
  },
})
