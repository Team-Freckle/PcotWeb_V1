import { OrganizationInfo } from "@components/OrganizationInfo";
import { OrganizationWorkspaceList } from "@components/WorkspaceList/OrganizationWorkspaceList";
import Wrapper from "@components/Wrapper";
import { OrganizationSideBar } from "@components/SideBar/SideBars/OrganizationSideBar";
import React from "react";
import { useParams } from "react-router-dom";

import * as S from "./style";
import { OrganizationManupulate } from "@components/OrganizationManipulate";

export const Organization = () => {
  const { organization } = useParams();

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <Wrapper>
        <S.FloatBox>
          <OrganizationSideBar name={organization} />
        </S.FloatBox>
        <OrganizationInfo name={organization} />
        <OrganizationWorkspaceList name={organization} />
        <OrganizationManupulate name={organization} />
      </Wrapper>
    </div>
  );
};
