import React from "react";
import { Emoji } from "@brillout/docpress";
import { FeatureList } from "@brillout/docpress/features/FeatureList";
import Control from "./Control.mdx";
import FullFleged from "./FullFledged.mdx";
import DeployAnywhere from "./DeployAnywhere.mdx";
import { TweetsAboutScability } from "./TweetsAboutScability";
import { ViteLogo } from "./ViteLogo";
import { VikeLogo } from "./VikeLogo";
import { RollupLogo } from "./RollupLogo";

export { Features };

function Features() {
  return (
    <FeatureList
      features={[
        {
          title: (
            <>
              <Emoji name='wrench' /> 掌控
            </>
          ),
          desc: (
            <>
              <p>
                在<code>vite-plugin-ssr</code>中你可以使用<b>任意UI框架</b>
                （React, Vue, Svelte, Solid, ...）和<b>任意工具</b>
                （任意前端框架、web技术栈、部署环境、Vite插件...）
              </p>
              <p>
                你可以手动继承各种工具，并且保持<b>掌控架构</b>
              </p>
            </>
          ),
          learnMore: <Control />,
        },
        {
          title: (
            <>
              <Emoji name='package' /> 零配置
            </>
          ),
          desc: (
            <>
              <p>
                <code>vite-plugin-ssr</code> 让你 <b>只在关键的地方进行配置</b>
              </p>
              <p>
                不需要任何配置即可让一切<b>完美运行</b>
              </p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='dizzy' /> 简单
            </>
          ),
          desc: (
            <>
              <p>
                在 <code>vite-plugin-ssr</code>{" "}
                中你可以手动集成工具链。虽然它意味着更多的工作量，但同时它为你提供了
                <b>从根本上更简单 & 更加稳定的基础</b>来构建上层框架
              </p>
              <p>
                <code>vite-plugin-ssr</code>{" "}
                和你的UI框架（React/Vue/...）之间结构清晰，使得你的应用容易理解
              </p>
            </>
          ),
          learnMore: (
            <>
              <h3>万事开头难</h3>
              <p>
                在 <code>vite-plugin-ssr</code> 中，你需要自己集成工具链。
                这通常意味着更多的工作量和一些难度，上手可能会慢一些。
              </p>
              <p>
                但是像 Next.js/Nuxt
                这样的黑盒框架限制了解决方案。到最后，你会浪费时间在与框架斗争上
              </p>
              <p>
                相比之下， <code>vite-plugin-ssr</code>{" "}
                是透明的：它不会妨碍你集成任何工具，只需遵循该工具的官方安装指南即可
              </p>
              <p>
                简言之：<code>vite-plugin-ssr</code> 可能没那么容易，但是更简单
              </p>
              <h3>基础稳定</h3>
              <p>
                框架需要持续跟上生态的步伐，而 “只做一件事”
                的工具可以快速稳定下来
              </p>
              <p>
                实际上，<code>vite-plugin-ssr</code>已经很稳定了：{" "}
                破坏性更改只是为了改进
                <code>vite-plugin-ssr</code>
                的设计，这意味着你的集成可以继续工作。
              </p>
              <h3>干净利落</h3>
              <p>
                <code>vite-plugin-ssr</code> 和你的 UI
                框架（React/Vue/...）之间没有混淆。 这使得你的应用代码容易理解。
              </p>
              <h3>趣味十足</h3>
              <p>
                最后且重要的是，手动集成既有趣又有见地！
                （而与框架作斗争是不必要的，而且很烦人）
              </p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='mechanical-arm' /> 成熟
            </>
          ),
          desc: (
            <>
              <p>
                <b>文件系统路由</b>, <b>数据获取</b>,{" "}
                <b>预渲染</b>, <b>Layouts</b>, <b>HMR</b>, <b>i18n</b>,{" "}
                <b>Link 预请求</b>, <b>HTML Streaming</b>.
              </p>
              <p>
                <b>Client Routing</b> (fast page navigation) or{" "}
                <b>Server Routing</b> (simple architecture).
              </p>
              <p>
                All render modes: <b>SSR</b>, <b>SPA</b>, <b>MPA</b>, <b>SSG</b>
                , <b>HTML-only</b>. Each page can use a different mode.
              </p>
            </>
          ),
          learnMore: <FullFleged />,
        },
        {
          title: (
            <>
              <Emoji name='earth' /> Deploy anywhere
            </>
          ),
          desc: (
            <>
              <p>
                <b>Deploy anywhere</b> (Vercel Serverless/Edge/ISR, Cloudflare
                Workers, AWS EC2/Lambda, Firebase, Google Cloud, ...).
              </p>
              <p>
                Pre-render your app and deploy it to <b>any static host</b>{" "}
                (Netlify, GitHub Pages, Cloudflare Pages, ...).
              </p>
              <p>
                Fits <b>Cloudflare Workers</b>'s small worker size requirement
                like a glove.
              </p>
            </>
          ),
          learnMore: <DeployAnywhere />,
        },
        {
          title: (
            <>
              <Emoji name='gem-stone' /> Rock-solid
            </>
          ),
          desc: (
            <>
              <p>
                The source code of <code>vite-plugin-ssr</code> has{" "}
                <b>no known bug</b>, every release is assailed against a heavy
                suite of <b>automated tests</b>, and it's{" "}
                <b>used in production</b> by many comp&shy;anies.
              </p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='rocket' /> Scalable
            </>
          ),
          desc: (
            <>
              <p>
                <b>DX that scales</b> to hundreds of kLOCs: HMR & dev start that
                stays fast, powered by Vite <ViteLogo />.
              </p>
              <p>
                <b>Architectural flexibility that scales</b> from small hobby
                projects to large-scale enterprise projects.
              </p>
            </>
          ),
          learnMore: (
            <>
              <h3>Lazy-transpiling</h3>
              <p>
                One of Vite's foundational novelty is lazy-transpiled
                development: instead of transpiling your entire codebase before
                starting developing, Vite transpiles only loaded code.
              </p>
              <p>
                For example, if you define 100 pages and then open a page in the
                browser, then only the code for that one page is transpiled
                while the code for all other 99 pages is left untouched.
              </p>
              <p>
                Thanks to lazy-transpiling, you can scale to a (very) large
                codebase while keeping fast HMR & development start.
              </p>
              <h3>No black box</h3>
              <p>
                At scale, Next.js/Nuxt's black-box nature become painfully
                limiting.
              </p>
              <p>
                In contrast, <code>vite-plugin-ssr</code> is transparent: you
                keep control over both the server- and browser-side.
              </p>
              <p>
                As you scale, you usually need increasingly custom SSR
                integrations; <code>vite-plugin-ssr</code>'s flexibility
                accommodates such needs.
              </p>
              <h3>
                Vite + SSR + Scale = <Emoji name='red-heart' />
              </h3>
              <p>
                At (very) large scale, you can progressively replace{" "}
                <code>vite-plugin-ssr</code> with Vite's native SSR API which is
                lower-level and highly flexible. If you're Netflix and
                perfecting UX leads to a substantial revenue increase, then{" "}
                <code>vite-plugin-ssr</code> and Vite's native SSR API are what
                you are looking for.
              </p>
              <TweetsAboutScability />
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='high-voltage' /> Fast
            </>
          ),
          desc: (
            <>
              <p>
                State-of-the-art performance with <b>Code Splitting</b>,{" "}
                <b>Client Routing</b>, <b>Link Prefetching</b>, and{" "}
                <b>Fast Cold Starts</b>.
              </p>
              <p>Lighthouse Score: 100%.</p>
            </>
          ),
          isSecondaryFeature: true,
          learnMore: (
            <>
              <h3>Code Splitting</h3>
              <p>
                The browser-side of each page loads only the code it needs,
                while sharing common chunks between pages for optimal
                cacheability. Powered by Rollup <RollupLogo />.
              </p>
              <h3>Client Routing</h3>
              <p>
                Upon page navigation, instead of loading and rendering the next
                page on both the server-side and browser-side, the next page is
                loaded & rendered only on the browser-side.
              </p>
              <h3>Link Prefetching</h3>
              <p>You can preload links for instantaneous page navigation.</p>
              <h3>Fast Cold Starts</h3>
              <p>
                On the server-side, pages are as well lazy-loaded: adding pages
                doesn't increase the cold start of your (serverless) deployment.
              </p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='sparkling-heart' /> Fun
            </>
          ),
          desc: (
            <>
              <p>
                <code>vite-plugin-ssr</code> is simple, clear, and robust: no
                magic, no unexpected behavior, no conflation, no bugs (known in{" "}
                <code>vite-plugin-ssr</code>'s source code).
              </p>
              <p>
                With <code>vite-plugin-ssr</code>,{" "}
                <b>you are under control; it's addictively fun</b>.
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <VikeLogo /> Build Your Own Framework
            </>
          ),
          desc: (
            <>
              <p>
                Use <code>vite-plugin-ssr</code> to{" "}
                <a href='https://vike.land/'>Build Your Own Framework</a>.
                Hundreds of lines of code are enough to build your own Next.js /
                Nuxt.
              </p>
              <p>
                Build <b>internal company frameworks</b> to scale your teams, or{" "}
                <b>enhance your product</b> with a bespoke framework to delight
                your users, or just <b>keep architectural control</b>.
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='red-heart' /> Craftsmanship
            </>
          ),
          desc: (
            <>
              <p>
                Crafted with <b>attention to details</b> and{" "}
                <b>care for simplicity</b>.
              </p>
              <p>
                <b>Upsteam contributions</b> to Vite and others.
              </p>
              <p>
                GitHub and Discord <b>conversations are welcome</b>.
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='lab' /> Cutting Edge
            </>
          ),
          desc: (
            <>
              <p>
                We regularly participate in RFCs and we are usually{" "}
                <b>among the first to support the latest</b> techniques.
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
      ]}
    />
  );
}
