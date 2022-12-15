export { Invitation };

import React from "react";
import { projectInfo } from "../utils/projectInfo";

function Invitation() {
  return (
    <>
      <a href={projectInfo.discordInvite}>加入 Discord 服务器</a> 或者{" "}
      <a href={projectInfo.githubIssues}>创建 GitHub issue</a>
    </>
  );
}
