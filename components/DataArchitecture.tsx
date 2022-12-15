export { DataArchitecture };

import React from "react";
import { assert } from "@brillout/docpress";
import { P, Link, Info, ReadingRecommendation } from "@brillout/docpress";

function DataArchitecture({
  toolName,
  toolLink,
  isGeneric,
  toolType,
  toolDocs,
  skipPassToClient,
}: {
  toolName: string;
  toolLink?: string;
  isGeneric: boolean;
  toolType: "data-store" | "data-fetching";
  toolDocs: JSX.Element;
  skipPassToClient?: true;
}) {
  const recommendation = (
    <ReadingRecommendation tour={true} links={["/data-fetching"]} />
  );
  return (
    <>
      {skipPassToClient && recommendation}
      <DataRenderControl
        toolName={toolName}
        toolLink={toolLink}
        isGeneric={isGeneric}
        toolDocs={toolDocs}
        skipInfo={skipPassToClient}
      />
      {!skipPassToClient && recommendation}
      {!skipPassToClient && (
        <DataPassToClient
          toolType={toolType}
          isGenericDoc={isGeneric}
          toolName={toolName}
        />
      )}
    </>
  );
}

function DataRenderControl({
  toolName,
  toolLink,
  isGeneric,
  toolDocs,
  skipInfo,
}: {
  toolName: string;
  toolLink?: string;
  isGeneric: boolean;
  toolDocs: JSX.Element;
  skipInfo?: boolean;
}) {
  assert([true, false].includes(isGeneric), {
    isGeneric,
    isGenericType: typeof isGeneric,
  });

  assert(isGeneric === !toolLink, { isGeneric, toolName, toolLink });
  const toolEl = toolLink ? <a href={toolLink}>{toolName}</a> : toolName;
  const content = (
    <>
      通过 <code>vite-plugin-ssr</code>， 我们可以控制我们的应用架构；只需按照其
      SSR 文档即可集成 {toolEl}
      {toolDocs && (
        <ul>
          <li>{toolDocs}</li>
        </ul>
      )}
    </>
  );
  if (skipInfo) {
    return content;
  } else {
    return <Info>{content}</Info>;
  }
}
function DataPassToClient({
  toolType,
  isGenericDoc,
  toolName,
}: {
  toolType: "data-store" | "data-fetching";
  isGenericDoc?: boolean;
  toolName: string;
}) {
  assert(toolType === "data-store" || toolType === "data-fetching");
  assert(
    isGenericDoc === undefined ||
      isGenericDoc === true ||
      isGenericDoc === false
  );
  const dataName = toolType === "data-store" ? "状态" : "数据";
  const pageContextName =
    toolType === "data-store" ? "initialStoreState" : "initialData";
  return (
    <P>
      在高层次上，SSR 集成{isGenericDoc ? "通常" : ""}是这样工作的：
      <ol>
        <li>
          在服务端
          {toolType === "data-store"
            ? "设置store的初始状态"
            : "获取初始数据"}{" "}
          (我们在服务端执行此操作，以便于初始
          {toolType === "data-store" ? "状态" : "数据"}渲染到HTML)
        </li>
        <li>
          将初始{dataName}传递到 <code>pageContext.{pageContextName}</code>
        </li>
        <li>
          通过将 <code>{`'${pageContextName}'`}</code> 添加到{" "}
          <Link href='/passToClient' text={<code>passToClient</code>} /> 使{" "}
          <code>pageContext.{pageContextName}</code> 在浏览器端可用
        </li>
        <li>
          使用 <code>pageContext.{pageContextName}</code> 在浏览器端初始化{" "}
          {toolType === "data-store" ? "store" : toolName}
        </li>
      </ol>
    </P>
  );
}
