import React from "react";
import type { HeadingDefinition, HeadingWithoutLink } from "@brillout/docpress";

export { headingsWithoutLink };
export { headings };

const redirections = [
  {
    title: <code>useClientRouter()</code>,
    url: "/useClientRouter",
  },
  {
    title: (
      <>
        Migration <code>0.4</code>
      </>
    ),
    url: "/migration-0.4",
  },
  {
    title: "HTML Streaming",
    url: "/html-streaming",
  },
  {
    title: "SPA vs SSR vs HTML",
    url: "/SPA-vs-SSR-vs-HTML",
  },
  {
    title: "NextAuth.js",
    url: "/nextauth",
  },
  {
    title: "HTML `<head>`",
    url: "/html-head",
  },
  {
    title: "Server Routing VS Client Routing",
    url: "/SR-vs-CR",
  },
  {
    title: "Render-as-you-Fetch",
    url: "/render-as-you-fetch",
  },
];

const headingsWithoutLink: HeadingWithoutLink[] = [
  ...redirections,
  {
    title: (
      <>
        Migration <code>0.4.23</code>
      </>
    ),
    url: "/migration/0.4.23",
  },
  {
    title: (
      <>
        Migration <code>0.4</code>
      </>
    ),
    url: "/migration/0.4",
  },
  {
    title: "Migrations",
    url: "/migration",
  },
  {
    title: "Client Routing",
    url: "/client-routing",
  },
  {
    title: "Server Routing",
    url: "/server-routing",
  },
  { title: "What is Hydration?", url: "/hydration" },
  { title: <code>dist/server/importBuild.js</code>, url: "/importBuild.js" },
  { title: <code>importBuild.cjs</code>, url: "/importBuild.cjs" },
  { title: <code>injectAssets()</code>, url: "/injectAssets" },
  {
    title: (
      <>
        Multiple <code>onBeforeRender()</code> hooks
      </>
    ),
    url: "/onBeforeRender-multiple",
  },
  {
    title: (
      <>
        Manipulating <code>pageContext</code>
      </>
    ),
    url: "/pageContext-manipulation",
  },
  { title: "Server-Side Rendering (SSR)", url: "/ssr" },
  { title: "TypeScript", url: "/typescript" },
  {
    title: (
      <>
        Multiple <code>renderer/</code>
      </>
    ),
    url: "/multiple-renderer",
  },
  {
    title: "`createPageRenderer()`",
    url: "/createPageRenderer",
  },
  {
    title: "Command `prerender`",
    url: "/command-prerender",
  },
  {
    title: "Vite Plugin",
    url: "/vite-plugin",
  },
  {
    title: "Content- VS interactive-centric",
    url: "/content-vs-interactive",
  },
  {
    title: "SPA vs SSR (and more)",
    url: "/SPA-vs-SSR",
  },
];

const headings: HeadingDefinition[] = [
  {
    level: 1,
    title: "概览",
    titleEmoji: "compass",
  },
  {
    level: 2,
    title: "介绍",
    titleDocument: "vite-plugin-ssr",
    url: "/",
  },
  /*
  {
    level: 2,
    title: 'What is Server-side Rendering (SSR)?',
    url: '/ssr',
  },
  */
  {
    level: 2,
    title: "Vue 教程",
    url: "/vue-tour",
  },
  {
    level: 2,
    title: "React 教程",
    url: "/react-tour",
  },
  {
    level: 1,
    title: "开始",
    titleEmoji: "seedling",
  },
  {
    level: 2,
    title: "脚手架初始化",
    url: "/scaffold",
  },
  {
    level: 2,
    title: "添加到已有应用",
    url: "/add",
  },
  {
    level: 1,
    title: "指南",
    titleEmoji: "books",
  },
  {
    level: 4,
    title: "基础",
  },
  {
    level: 2,
    title: "路由",
    url: "/routing",
  },
  {
    level: 2,
    title: "数据获取",
    url: "/data-fetching",
  },
  {
    level: 2,
    title: "预渲染 (SSG)",
    url: "/pre-rendering",
  },
  {
    level: 2,
    title: "随处访问 `pageContext`",
    url: "/pageContext-anywhere",
  },
  {
    level: 4,
    title: "进阶",
  },
  {
    level: 2,
    title: "`<head>`",
    url: "/head",
  },
  {
    level: 2,
    title: "静态文件目录 (`public/`)",
    url: "/static-directory",
  },
  {
    level: 2,
    title: "Hydration Mismatch",
    url: "/hydration-mismatch",
  },
  {
    level: 2,
    title: "Layouts - 布局",
    url: "/layouts",
  },
  {
    level: 2,
    title: "Render Modes (SPA, SSR, SSG, HTML-only)",
    titleInNav: "SPA, SSR, SSG, HTML-only",
    url: "/render-modes",
    // TODO: 解开comment
    // sectionTitles: ['HTML-only', 'SPA', 'SSR']
  },
  {
    level: 2,
    title: "`.env` 文件",
    url: "/.env-files",
  },
  {
    level: 2,
    title: "国际化 (i18n)",
    url: "/i18n",
  },
  {
    level: 2,
    title: "文件结构",
    url: "/file-structure",
  },
  {
    level: 2,
    title: "自定义 Exports/Hooks",
    url: "/exports",
  },
  {
    level: 2,
    title: "路径别名",
    url: "/path-aliases",
  },
  {
    level: 2,
    title: "预加载",
    url: "/preload",
  },
  {
    level: 2,
    title: "HTML streaming",
    url: "/stream",
  },
  {
    level: 2,
    title: "API 路由",
    url: "/api-routes",
  },
  {
    level: 2,
    title: "Client-only 组件",
    url: "/client-only-components",
  },
  {
    level: 2,
    title: "动态 `import()`",
    url: "/dynamic-import",
  },
  {
    level: 2,
    title: "错误追踪",
    url: "/error-tracking",
  },
  {
    level: 2,
    title: "Debug",
    url: "/debug",
  },
  {
    level: 2,
    title: "构建你自己的框架",
    url: "/build-your-own-framework",
  },
  {
    level: 1,
    title: "路由",
    titleEmoji: "road-fork",
  },
  {
    level: 2,
    title: "服务端路由 VS 客户端路由",
    url: "/server-routing-vs-client-routing",
  },
  {
    level: 2,
    title: "文件系统路由",
    url: "/filesystem-routing",
  },
  {
    level: 2,
    title: "路由字符串",
    url: "/route-string",
  },
  {
    level: 2,
    title: "路由函数",
    url: "/route-function",
  },
  {
    level: 2,
    title: "Active 链接",
    url: "/active-links",
  },
  {
    level: 2,
    title: "页面重定向",
    url: "/page-redirection",
  },
  {
    level: 2,
    title: "Base URL",
    url: "/base-url",
  },
  {
    level: 2,
    title: "Catch-All 路由",
    url: "/catch-all",
  },
  {
    level: 2,
    title: "Routing 优先级",
    url: "/routing-precedence",
  },
  {
    level: 2,
    title: "Vue Router & React Router",
    url: "/vue-router-and-react-router",
  },
  {
    level: 1,
    title: "部署",
    titleEmoji: "earth",
  },
  {
    level: 4,
    title: "静态hosts",
  },
  {
    level: 2,
    title: "GitHub Pages",
    url: "/github-pages",
  },
  {
    level: 2,
    title: "Cloudflare Pages",
    url: "/cloudflare-pages",
  },
  {
    level: 2,
    title: "Netlify",
    url: "/netlify",
  },
  {
    level: 2,
    title: "静态 Hosts",
    titleInNav: "Other",
    url: "/static-hosts",
  },
  {
    level: 4,
    title: "Serverless",
  },
  {
    level: 2,
    title: "Cloudflare Workers",
    url: "/cloudflare-workers",
    sectionTitles: ["Cloudflare Pages"],
  },
  {
    level: 2,
    title: "Vercel",
    url: "/vercel",
  },
  {
    level: 2,
    title: "Netlify Functions",
    url: "/netlify-functions",
  },
  {
    level: 2,
    title: "AWS Lambda",
    url: "/aws-lambda",
  },
  {
    level: 2,
    title: "Firebase",
    url: "/firebase",
  },
  {
    level: 4,
    title: "Other",
  },
  {
    level: 2,
    title: "Docker",
    url: "/docker",
  },
  {
    level: 2,
    title: "部署",
    titleInNav: "Other",
    url: "/deploy",
  },
  {
    level: 1,
    title: "集成",
    titleEmoji: "plug",
  },
  {
    level: 4,
    title: "数据 fetch",
  },
  {
    level: 2,
    title: "Apollo (GraphQL)",
    url: "/apollo-graphql",
  },
  {
    level: 2,
    title: "Vue Query",
    url: "/vue-query",
  },
  {
    level: 2,
    title: "Relay (GraphQL)",
    url: "/relay",
  },
  {
    level: 2,
    title: "Wildcard API (RPC)",
    url: "/wildcard-api",
  },
  {
    level: 2,
    title: "urql (GraphQL)",
    url: "/urql",
  },
  {
    level: 2,
    title: "gRPC (RPC)",
    url: "/grpc",
  },
  {
    level: 2,
    titleInNav: "Other",
    title: "Data Fetching Tools",
    url: "/data-fetching-tools",
  },
  {
    level: 4,
    title: "状态管理",
  },
  {
    level: 2,
    title: "Vuex",
    url: "/vuex",
  },
  {
    level: 2,
    title: "Redux",
    url: "/redux",
  },
  {
    level: 2,
    title: "Pinia",
    url: "/pinia",
  },
  {
    level: 2,
    title: "PullState",
    url: "/pullstate",
  },
  {
    level: 2,
    title: "Data Store",
    titleInNav: "Other",
    url: "/store",
  },
  {
    level: 4,
    title: "鉴权",
  },
  {
    level: 2,
    title: "NextAuth.js",
    url: "/NextAuth.js",
  },
  {
    level: 2,
    title: "鉴权",
    titleInNav: "Other",
    url: "/auth",
  },
  {
    level: 4,
    title: "CSS, styling, CSS 框架",
  },
  {
    level: 2,
    title: "Tailwind CSS / Windi CSS",
    url: "/tailwind-css",
  },
  {
    level: 2,
    title: "Windi CSS",
    url: "/windi-css",
  },
  {
    level: 2,
    title: "Vuetify",
    url: "/vuetify",
  },
  {
    level: 2,
    title: "CSS-in-JS",
    url: "/css-in-js",
  },
  {
    level: 2,
    title: "`styled-components`",
    titleInNav: "styled-components",
    url: "/styled-components",
  },
  {
    level: 2,
    title: "Boostrap (Vanilla JS)",
    url: "/bootstrap",
  },
  {
    level: 2,
    title: "Sass / Less / Stylus",
    url: "/sass",
  },
  {
    level: 2,
    titleInNav: "Other",
    title: "CSS 框架",
    url: "/css-frameworks",
  },
  {
    level: 4,
    title: "UI 框架",
  },
  {
    level: 2,
    title: "Svelte",
    url: "/svelte",
  },
  {
    level: 2,
    title: "Preact",
    url: "/preact",
  },
  {
    level: 2,
    title: "Solid",
    url: "/solid",
  },
  {
    level: 2,
    title: "Angular",
    url: "/angular",
  },
  {
    level: 2,
    titleInNav: "Other",
    title: "UI 框架",
    url: "/ui-framework",
  },
  {
    level: 4,
    title: "Server",
  },
  {
    level: 2,
    title: "HTTPS",
    url: "/https",
  },
  {
    level: 2,
    title: "hapi",
    url: "/hapi",
  },
  {
    level: 2,
    title: "Fastify",
    url: "/fastify",
  },
  {
    level: 4,
    title: "Other",
  },
  {
    level: 2,
    title: "Markdown",
    url: "/markdown",
  },
  {
    level: 2,
    title: "Other 集成",
    titleInNav: "Other",
    url: "/integration",
  },
  {
    level: 1,
    title: "API",
    titleEmoji: "gear",
  },
  {
    level: 4,
    title: "Core",
  },
  {
    level: 2,
    title: "`pageContext`",
    url: "/pageContext",
  },
  {
    level: 4,
    title: "Global config",
  },
  {
    level: 2,
    title: "`prerender` config",
    url: "/prerender-config",
  },
  {
    level: 2,
    title: "`includeAssetsImportedByServer`",
    url: "/includeAssetsImportedByServer",
  },
  {
    level: 2,
    title: "`disableAutoFullBuild`",
    url: "/disableAutoFullBuild",
  },
  {
    level: 4,
    title: "Node.js & browser",
  },
  {
    level: 2,
    title: "`.page.js`",
    url: "/.page.js",
  },
  {
    level: 2,
    title: "`export { Page }`",
    isListTitle: true,
    url: "/Page",
  },
  {
    level: 2,
    title: "`onBeforeRender()` hook (`.page.js`)",
    titleInNav: "`export { onBeforeRender }`",
    isListTitle: true,
    url: "/onBeforeRender-isomorphic",
  },
  {
    level: 4,
    title: "Node.js",
  },
  {
    level: 2,
    title: "`.page.server.js`",
    url: "/.page.server.js",
  },
  {
    level: 2,
    title: "`Page` (server-side)",
    titleInNav: "`export { Page }`",
    isListTitle: true,
    url: "/Page-server",
  },
  {
    level: 2,
    title: "`onBeforeRender()` hook (`.page.server.js`)",
    titleInNav: "`export { onBeforeRender }`",
    isListTitle: true,
    url: "/onBeforeRender",
  },
  {
    level: 2,
    title: "`passToClient`",
    titleInNav: "`export { passToClient }`",
    isListTitle: true,
    url: "/passToClient",
  },
  {
    level: 2,
    title: "`render()` hook",
    titleInNav: "`export { render }`",
    isListTitle: true,
    url: "/render",
  },
  {
    level: 2,
    title: "`prerender()` hook",
    titleInNav: "`export { prerender }`",
    isListTitle: true,
    url: "/prerender",
  },
  {
    level: 2,
    title: "`doNotPrerender`",
    titleInNav: "`export { doNotPrerender }`",
    isListTitle: true,
    url: "/doNotPrerender",
  },
  {
    level: 2,
    title: "`renderPage()`",
    url: "/renderPage",
  },
  {
    level: 2,
    title: "`injectFilter()`",
    url: "/injectFilter",
  },
  {
    level: 2,
    title: "`escapeInject`",
    url: "/escapeInject",
  },
  {
    level: 2,
    title: "`prerender()` programmatic",
    url: "/prerender-programmatic",
  },
  {
    level: 4,
    title: "Browser",
  },
  {
    level: 2,
    title: "`.page.client.js`",
    url: "/.page.client.js",
  },
  {
    level: 2,
    title: "`Page` (client-side)",
    titleInNav: "`export { Page }`",
    isListTitle: true,
    url: "/Page-client",
  },
  {
    level: 2,
    title: "`render()` hook (client-side)",
    titleInNav: "`export { render }`",
    isListTitle: true,
    url: "/render-client",
  },
  {
    level: 2,
    title: "`clientRouting`",
    titleInNav: "`export { clientRouting }`",
    isListTitle: true,
    url: "/clientRouting",
  },
  {
    level: 2,
    title: "`navigate()`",
    url: "/navigate",
  },
  {
    level: 4,
    title: "Routing",
  },
  {
    level: 2,
    title: "`.page.route.js`",
    url: "/.page.route.js",
  },
  {
    level: 2,
    title: "`_default.page.route.js`",
    url: "/_default.page.route.js",
  },
  {
    level: 2,
    title: "`filesystemRoutingRoot`",
    titleInNav: "`export { filesystemRoutingRoot }`",
    isListTitle: true,
    url: "/filesystemRoutingRoot",
  },
  {
    level: 2,
    title: "`onBeforeRoute()` hook",
    titleInNav: "`export { onBeforeRoute }`",
    // titleInNav: '`onBeforeRoute`',
    isListTitle: true,
    url: "/onBeforeRoute",
  },
  {
    level: 4,
    title: "Special pages",
  },
  {
    level: 2,
    title: "`_default.page.*`",
    url: "/default-page",
  },
  {
    level: 2,
    title: "`_error.page.js`",
    url: "/error-page",
  },
];
