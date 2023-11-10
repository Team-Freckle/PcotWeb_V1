import React from "react";

import * as S from "./style";

import Chart from "@components/Organization/Chart";
import { GitGraph } from "@components/GitGraph";
import { OrganizationSideBar } from "@components/SideBar/SideBars/OrganizationSideBar";
import Wrapper from "@components/Wrapper";
import { useParams } from "react-router-dom";

export const Workspace = () => {
  const { organization } = useParams();

  return (
    <div>
      <Wrapper>
        <S.FloatBox>
          <OrganizationSideBar name={organization} />
        </S.FloatBox>
        <S.Main>
          <Chart />
          <GitGraph />
        </S.Main>
      </Wrapper>
    </div>
  );
};

export default Workspace;
