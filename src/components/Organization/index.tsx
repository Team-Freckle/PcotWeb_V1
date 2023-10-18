// import { SideBar } from "@components/SideBar/SideBars/MainSideBar";
import { WorkspaceList } from "@components/WorkspaceList";
import React from "react";
import * as S from "./style";

const DummyPage = () => {
  return (
    <>
      <S.Flex>
        {/* <SideBar /> */}

        <WorkspaceList name="workspace" />
      </S.Flex>
    </>
  );
};

export default DummyPage;
