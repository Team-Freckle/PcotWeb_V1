import React from "react";

import * as S from "./style";

import Chart from "@components/Organization/Chart";
import Gitgraph from "@components/GitGraph";
import { OrganizationSideBar } from "@components/SideBar/SideBars/OrganizationSideBar";
import Wrapper from "@components/Wrapper";

export const Workspace = () => {
  return (
    <div>
      <Wrapper>
        <S.FloatBox>
          <OrganizationSideBar />
        </S.FloatBox>
        <Chart />
        <Gitgraph />
      </Wrapper>
    </div>
  );
};

export default Workspace;
