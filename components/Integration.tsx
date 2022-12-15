export { Integration };

import React from "react";
import { assert } from "@brillout/docpress";
import { Invitation } from "./Invitation";

function Integration({ toolTypeName }: { toolTypeName: string }) {
  assert(toolTypeName);
  return (
    <>
      <p>
        原则上，你可以将 <code>vite-plugin-ssr</code> 与任何 {toolTypeName}{" "}
        一起使用。但是，如果你在集成工具时遇到困难，请<Invitation />
      </p>
    </>
  );
}
