export default {
  title: "MarkusFx (itPit)",
  description: "Моя документация на VitePress",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      // { text: 'Python', link: '/python/page_1' },
      // { text: 'JavaScript', link: '/javascript/page_1' },
      // {
      //   text: 'Python (DD MENU)',
      //   items: [
      //     { text: 'Page_1', link: '/python/page_1' },
      //     { text: 'Page_2', link: '/python/page_1' },
      //     { text: 'Page_3', link: '/python/page_1' },
      //   ],
      // },
    ],
    sidebar: {
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Page_1', link: '/python/page_1' },
            { text: 'Page_2', link: '/python/page_2' },
            { text: 'Page_3', link: '/python/page_3' },
          ],
        },
      ],
      '/javascript/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'Page_1', link: '/javascript/page_1' },
            { text: 'Page_2', link: '/javascript/page_2' },
            { text: 'Page_3', link: '/javascript/page_3' },
          ],
        },
      ],
    }
  }
}

