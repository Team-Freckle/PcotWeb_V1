import React from "react";
import * as S from "./style";

import { ReactComponent as SidbarIcon } from "../../assets/Sidebar.svg";
import SideBarProfile from "./Profile";
import SideBarMembers from "./Members";
import SideBarWorkspace from "./WorkSpace";
import WorkChangeBtn from "./Workbutton";
import SidebarExampleSidebar from "./Test/Testbox";

function SideBar() {
  return (
    <S.MainCotainer>
      <S.Flex>
        <SidbarIcon />
        PCOT
      </S.Flex>
      <SidebarExampleSidebar />
      <SideBarProfile />
      <WorkChangeBtn />
      <SideBarMembers />
      <SideBarWorkspace />
    </S.MainCotainer>
  );
}

export default SideBar;
