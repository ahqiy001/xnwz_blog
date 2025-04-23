import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小念温知博客",
  description: "欢迎您的到来！",
  markdown: {
    config: (md) => {
      md.use(taskLists)
    }
  },
  head:[
    [
      'meta',
      {
        'name':'meta-name',
        'conent':'meta-content'
      }
    ], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{"text":"首页","link":"/"},{"text":"默认笔记","items":[{"text":"小念测试","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0"}]}],
    sidebar: [{"text":"首页","link":"/"},{"text":"默认笔记","items":[{"text":"小念测试","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0"}]}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyming99/wenzdoc_web' }
    ],
    //页脚
    footer: {
      message: '',
      //copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">xxxx</a>', 
      copyright: 'Copyright ©ahqiy001 2025', 
    },
  }
})
