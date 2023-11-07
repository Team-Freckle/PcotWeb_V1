import React from "react";

import * as S from "./style";

import Chart from "@components/Organization/Chart";
import Gitgraph from "@components/GitGraph";
import { OrganizationSideBar } from "@components/SideBar/SideBars/OrganizationSideBar";

export const Workspace = () => {
  return (
    <div>
      <S.FloatBox>
        <OrganizationSideBar />
      </S.FloatBox>
      <Chart />
      <Gitgraph />
    </div>
  );
};

export default Workspace;
