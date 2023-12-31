import type { DefaultTheme } from 'vitepress';
import type { I18Key, I18Locales } from './types.d';

export const i18Navs: Record<I18Key, DefaultTheme.NavItem[]> = {
  zh: [
    {
      text: '指引',
      link: '/zh/guide/basic/Design'
    },
    { text: '组件', link: '/zh/components/docker/RMacDocker' },
    {
      text: '链接',
      items: [
        { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' },
        { text: 'vuejs', link: 'https://vuejs.org/', target: '_blank' },
        { text: 'nestjs', link: 'https://nestjs.com/', target: '_blank' },
        { text: '@suey/printer', link: 'https://github.com/iqseternal/suey-printer', target: '_blank' },
        { text: '@suey/packages', link: 'https://github.com/iqseternal/suey-packages', target: '_blank' }
      ]
    }
  ],
  en: [
    {
      text: 'Guide',
      link: '/en/guide/basic/Design'
    },
    { text: 'Components', link: '/en/components/docker/RMacDocker' },
    {
      text: 'Link',
      items: [
        { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' },
        { text: 'vuejs', link: 'https://vuejs.org/', target: '_blank' },
        { text: 'nestjs', link: 'https://nestjs.com/', target: '_blank' },
        { text: '@suey/printer', link: 'https://github.com/iqseternal/suey-printer', target: '_blank' },
        { text: '@suey/packages', link: 'https://github.com/iqseternal/suey-packages', target: '_blank' }
      ]
    }
  ]
}
