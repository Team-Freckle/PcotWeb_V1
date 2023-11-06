import React, { useEffect, useState } from "react";

import * as S from "./style";

import Chart from "@components/Organization/Chart";
import Gitgraph from "@components/GitGraph";
import { ProfileSideBar } from "@components/SideBar/SideBars/ProfileSideBar";

export const Workspace = () => {
  return (
    <div>
      <S.FloatBox>
        <ProfileSideBar />
      </S.FloatBox>
      <Chart />
      <Gitgraph />
    </div>
  );
};

export default Workspace;
