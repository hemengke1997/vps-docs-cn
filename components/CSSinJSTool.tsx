export { CSSinJSTool };

import React from "react";

function CSSinJSTool({ prefix }: { prefix: string }) {
  return (
    <>
      <p>{prefix}在服务器端将页面渲染为 HTML 时收集页面的样式</p>

      <p>
        这使我们能够将样式添加到 HTML，以便浏览器在加载 JavaScript
        之前加载样式
      </p>
    </>
  );
}
