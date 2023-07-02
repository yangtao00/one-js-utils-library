import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/one-utils',
  title: 'one-utils',
  description: '一个js工具库',
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'one-utils',
    logo: '',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangtao00/one-utils' },
    ],
    nav: [{ text: '指南', link: '/guide/getting-started' }],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          link: '/guide/getting-started',
        },
        {
          text: '验证',
          link: '/guide/validate',
        },
        {
          text: '过滤',
          link: '/guide/filter',
        },
        {
          text: '时间处理',
          link: '/guide/time',
        },
        {
          text: '图片处理',
          link: '/guide/image',
        },
      ],
    },
  },
});
