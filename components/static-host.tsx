import React from "react";

export { StaticHostDocIntro };
export { StaticHostDocOutro };

function StaticHostDocIntro({
  staticHostLink,
}: {
  staticHostLink?: JSX.Element;
}) {
  return (
    <p>
      通过 <a href='/pre-rendering'>预渲染</a> 页面，我们可以消除对 Node.js
      服务器的需。还可以将应用程序部署到任何静态host
      {staticHostLink}
    </p>
  );
}
function StaticHostDocOutro({
  baseUrlAddendum,
}: {
  baseUrlAddendum?: JSX.Element;
}) {
  return (
    <div>
      <p>
        如果我们不在根目录 <code>/</code> 下部署应用程序，我们可以{" "}
        <a href='/base-url'>更改 Base URL</a>
        {baseUrlAddendum}
      </p>
      <p>通常，我们可以在以下部署策略之间进行选择：</p>
      <ul>
        <li>
          本地打包然后把 <code>dist/client/</code> 上传到静态host
        </li>
        <li>
          <a href='https://github.com/features/actions'>GitHub action</a>{" "}
          打包并把 <code>dist/client/</code> 上传到静态host
        </li>
        <li>静态host运行构建</li>
      </ul>
      <blockquote>
        <p>
          <code>$ vite build</code> 命令生成一个目录 <code>dist/client/</code>
          ，其中包含了我们所有的静态资源。
        </p>
        <p>
          {" "}
          我们在本地尝试使用{" "}
          <a href='https://www.npmjs.com/package/serve'>serve</a> 部署：
          <code>$ serve dist/client/</code>
        </p>
      </blockquote>
    </div>
  );
  /*
  return <>


    </>
    */
}
