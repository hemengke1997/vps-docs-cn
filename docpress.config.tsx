import type { Config } from '@brillout/docpress'
import { headings, headingsWithoutLink } from './headings'
import { projectInfo } from './utils'
import faviconUrl from './images/icons/vite-plugin-ssr.svg'
import React from 'react'
import { NavHeader, NavHeaderMobile } from './NavHeader'

const config: Config = {
  projectInfo,
  faviconUrl,
  navHeader: <NavHeader />,
  navHeaderMobile: <NavHeaderMobile />,
  headings,
  headingsWithoutLink,
  tagline: 'Like Next.js/Nuxt but as do-one-thing-do-it-well Vite plugin.',
  titleNormalCase: false,
  twitterHandle: '@brillout',
  websiteUrl: 'https://cn.vite-plugin-ssr.com',
  algolia: {
    appId: 'U280Q1VRUH',
    // TODO: waiting for Algolia email...
    apiKey: 'cd644548e876ea3f03eb6aee23ce03c4',
    indexName: 'cn-vite-plugin-ssr'
  },
  bannerUrl: 'https://vite-plugin-ssr.com/banner.png',
  i18n: true
}
export default config
