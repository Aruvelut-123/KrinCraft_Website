import { defineConfig } from 'vitepress'
import dayjs from 'dayjs'

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
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kxkl2077/KrinCraft_Website' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/2012569194' }
    ],
    footer: { // 页脚
      message: '基于 MIT 协议发表。',
      copyright: `Copyright © ${dayjs().format("YYYY")} Kxkl2077`
    },
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重制搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: 'enter',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上方向键',
                  navigateDownKeyAriaLabel: '下方向键',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
  },
})
