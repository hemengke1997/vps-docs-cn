import React from 'react'
import { Emoji } from '@brillout/docpress'
import { FeatureList } from '@brillout/docpress/features/FeatureList'
import Control from './Control.mdx'
import FullFleged from './FullFledged.mdx'
import DeployAnywhere from './DeployAnywhere.mdx'
import { TweetsAboutScability } from './TweetsAboutScability'
import { ViteLogo } from './ViteLogo'
import { VikeLogo } from './VikeLogo'
import { RollupLogo } from './RollupLogo'

export { Features }

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
                在 <code>vite-plugin-ssr</code> 中你可以使用<b>任意UI框架</b>
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
                在 <code>vite-plugin-ssr</code> 中你可以手动集成工具链。虽然它意味着更多的工作量，但同时它为你提供了
                <b>从根本上更简单 & 更加稳定的基础</b>来构建上层框架
              </p>
              <p>
                <code>vite-plugin-ssr</code> 和你的UI框架（React/Vue/...）之间分割清晰，使得你的应用容易理解
              </p>
            </>
          ),
          learnMore: (
            <>
              <h3>万事开头难</h3>
              <p>
                在 <code>vite-plugin-ssr</code> 中，你需要自己集成工具链。 这通常意味着更多的工作量和一些难度，上手可能会慢一些。
              </p>
              <p>但是像 Next.js/Nuxt 这样的黑盒框架限制了解决方案。到最后，你会浪费时间在与框架斗争上</p>
              <p>
                相比之下， <code>vite-plugin-ssr</code> 是透明的：它不会妨碍你集成任何工具，只需遵循该工具的官方安装指南即可
              </p>
              <p>
                简言之：<code>vite-plugin-ssr</code> 可能没那么容易，但是更简单
              </p>
              <h3>基础稳定</h3>
              <p>框架需要持续跟上生态的步伐，而 “只做一件事” 的工具可以快速稳定下来</p>
              <p>
                实际上，<code>vite-plugin-ssr</code>已经很稳定了： 破坏性更改只是为了改进
                <code>vite-plugin-ssr</code>
                的设计，这意味着你的集成可以继续工作。
              </p>
              <h3>干净利落</h3>
              <p>
                <code>vite-plugin-ssr</code> 和你的 UI 框架（React/Vue/...）之间没有混淆。 这使得你的应用代码容易理解。
              </p>
              <h3>趣味十足</h3>
              <p>最后且重要的是，手动集成既有趣又有见地！ （而与框架作斗争是不必要的，而且很烦人）</p>
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
                <b>文件系统路由</b>, <b>数据获取</b>， <b>预渲染</b>， <b>Layouts</b>， <b>HMR</b>， <b>i18n</b>， <b>Link 预请求</b>， <b>HTML 流式渲染</b>
              </p>
              <p>
                <b>客户端路由</b> （页面导航快） 或 <b>服务端路由</b> （架构简单）
              </p>
              <p>
                所有渲染方式: <b>SSR</b>， <b>SPA</b>， <b>MPA</b>， <b>SSG</b>， <b>HTML-only</b>
              </p>
              <p>每个页面可以使用不同的渲染方式</p>
            </>
          ),
          learnMore: <FullFleged />,
        },
        {
          title: (
            <>
              <Emoji name='earth' /> 随处部署
            </>
          ),
          desc: (
            <>
              <p>
                <b>随处部署</b> （Vercel Serverless/Edge/ISR，Cloudflare Workers，AWS EC2/Lambda，Firebase，Google Cloud， ...）
              </p>
              <p>
                预渲染应用并把它部署到 <b>任意静态host</b>（Netlify, GitHub Pages, Cloudflare Pages, ...）
              </p>
              <p>
                像手套一样适合 <b>Cloudflare Workers</b> 的小型worker尺寸要求
              </p>
            </>
          ),
          learnMore: <DeployAnywhere />,
        },
        {
          title: (
            <>
              <Emoji name='gem-stone' /> 坚如磐石
            </>
          ),
          desc: (
            <>
              <p>
                <code>vite-plugin-ssr</code> 源码 <b>无已知bug</b>
                ，每次发布都经过大量<b>自动化测试</b>，并且被多家公司 <b>用于生产环境</b>
              </p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='rocket' /> 规模化
            </>
          ),
          desc: (
            <>
              <p>
                可扩展至数百 kLOC 的 开发者体验：由 Vite 提供支持的 HMR 和快速启动开发
                <ViteLogo />
              </p>
              <p>
                <b>可扩展的灵活性架构</b> 从小型业余爱好项目扩展到大型企业项目
              </p>
            </>
          ),
          learnMore: (
            <>
              <h3>懒编译</h3>
              <p>Vite 的基础创新之一是懒编译开发：Vite 不是在开始开发之前编译整个代码库，而是只编译加载的代码</p>
              <p>例如，如果您定义了 100 个页面，然后在浏览器中打开一个页面，那么只有该页面的代码会被编译，而所有其他 99 个页面的代码将保持不变</p>
              <p>多亏了懒编译，你可以扩展到（非常）大的代码库，同时保持快速的 HMR 和开发启动。</p>
              <h3>无黑盒</h3>
              <p>在规模上，Next.js/Nuxt 的黑盒性质让人受到痛苦的限制</p>
              <p>
                相比之下，<code>vite-plugin-ssr</code> 是透明的： 你可以同时控制服务器端和浏览器端
              </p>
              <p>
                随着规模增大，你通常需要越来越多的自定义 SSR 集成； <code>vite-plugin-ssr</code>的灵活性可以满足这种需求
              </p>
              <h3>
                Vite + SSR + 规模化 = <Emoji name='red-heart' />
              </h3>
              <p>
                在规模（非常）大的情况下, 你可以渐进式地把
                <code>vite-plugin-ssr</code>
                替换为low-level和高度灵活的Vite的原生SSR。 如果你是 Netflix 并且完善 UX 可以带来可观的收入增长，那么
                <code>vite-plugin-ssr</code> 和 Vite 的原生 SSR API 就是你要找的
              </p>
              <TweetsAboutScability />
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='high-voltage' /> 快速
            </>
          ),
          desc: (
            <>
              <p>
                通过<b>代码分割</b>，<b>客户端路由</b>，<b>Link 预请求</b>和<b>快速冷启动</b>来实现最先进的性能
              </p>
              <p>Lighthouse 得分: 100%</p>
            </>
          ),
          isSecondaryFeature: true,
          learnMore: (
            <>
              <h3>代码分割</h3>
              <p>
                每个页面的浏览器端只加载它需要的代码，同时在页面之间共享公共代码块以实现最佳缓存能力。 由Rollup提供支持。
                <RollupLogo />
              </p>
              <h3>客户端路由</h3>
              <p>在页面导航时，不是在服务器端和浏览器端加载和渲染下一个页面，而是仅在浏览器端加载和渲染下一个页面</p>
              <h3>Link 预请求</h3>
              <p>你可以为即时页面导航预加载链接</p>
              <h3>快速冷启动</h3>
              <p>在服务器端，页面也是懒加载的：添加页面不会增加（serverless）部署的冷启动</p>
            </>
          ),
        },
        {
          title: (
            <>
              <Emoji name='sparkling-heart' /> 有趣
            </>
          ),
          desc: (
            <>
              <p>
                <code>vite-plugin-ssr</code> 简单， 清晰， 健壮: 没有魔法，没有意外行为，没有混淆，没有bug（
                <code>vite-plugin-ssr</code>源码）
              </p>
              <p>
                使用 <code>vite-plugin-ssr</code>， <b>一切尽在掌控；这是令人上瘾的乐趣</b>
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <VikeLogo /> 构建你自己的框架
            </>
          ),
          desc: (
            <>
              <p>
                使用 <code>vite-plugin-ssr</code> 来<a href='https://vike.land/'>构建你自己的框架</a>
                。数百行代码足以构建你自己的 Next.js / Nuxt
              </p>
              <p>
                构建 <b>公司内部框架</b> 来扩展你的团队，或者使用定制框架
                <b>增强你的产品</b>以取悦你的用户，再或者只是<b>保持掌控架构</b>
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='red-heart' /> 工匠精神
            </>
          ),
          desc: (
            <>
              <p>
                精心制作，<b>注重细节</b>，<b>追求简单</b>
              </p>
              <p>
                对上游<b> Vite贡献</b>
              </p>
              <p>
                欢迎来 GitHub 和 Discord <b>交流</b>
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
        {
          title: (
            <>
              <Emoji name='lab' /> 前沿
            </>
          ),
          desc: (
            <>
              <p>
                我们定期参与RFC，而且我们通常<b>最先支持最新技术</b>
              </p>
            </>
          ),
          isSecondaryFeature: true,
        },
      ]}
    />
  )
}
