import type { Config } from '@brillout/docpress'
import { headings, headingsDetached } from './headings'
import { projectInfo } from './utils'
import faviconUrl from './images/icons/vite-plugin-ssr.svg'
import React from 'react'
import { NavHeader, NavHeaderMobile } from './NavHeader'

export default {
  projectInfo,
  faviconUrl,
  navHeader: <NavHeader />,
  navHeaderMobile: <NavHeaderMobile />,
  headings,
  headingsDetached,
  tagline: '类似Next.js/Nuxt的vite插件但只做一件事并把它做到最好',
  titleNormalCase: false,
  twitterHandle: '@brillout',
  websiteUrl: 'https://cn.vite-plugin-ssr.com',
  algolia: {
    appId: 'U280Q1VRUH',
    // TODO: waiting for Algolia email...
    apiKey: 'cd644548e876ea3f03eb6aee23ce03c4',
    indexName: 'cn-vite-plugin-ssr'
  },
  bannerUrl: 'https://cn.vite-plugin-ssr.com/banner.png',
  i18n: true
} satisfies Config
