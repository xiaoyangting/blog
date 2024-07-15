import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tings",
  description: "tings's presonal record",
  outDir: "docs", //打包输出的目录
  base: "/blog/", //部署到github pages的路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: '前端', link: '/Web/index' }
    ],
    logo: "/images/logo.svg",

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
      "/Web/": [
        {
          text: "介绍",
          items: [{ text: "目的", link: "/Web/" }],
        },
        {
          text: "Vue",
          items: [
            {
              text: 'Vue2',
              link: '/Web/vue2.md'
            },
            {
              text: 'Vue3',
              link: '/Web/vue3.md',
              icon: ''
            }
          ]
        },
        {
          text: 'React',
          items: [
            {
              text: 'React',
              link: '/Web/react.md'
            }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoyangting' }
    ]
  }
})
