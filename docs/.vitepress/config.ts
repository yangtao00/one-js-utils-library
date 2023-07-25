import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/one-js-utils-library',
  title: 'one-js-utils-library',
  description: '一个js工具库',
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'one-js-utils-library',
    logo: '',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yangtao00/one-js-utils-library',
      },
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
          text: '时间',
          link: '/guide/time',
        },
        {
          text: '图片',
          link: '/guide/image',
        },
        {
          text: 'url',
          link: '/guide/url',
        },
        {
          text: '金额',
          link: '/guide/amount',
        },
        {
          text: '字符串处理',
          link: '/guide/string',
        },
        {
          text: 'storage',
          link: '/guide/storage',
        },
      ],
    },
  },
});
