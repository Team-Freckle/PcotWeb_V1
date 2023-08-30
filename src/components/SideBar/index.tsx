import React from "react";
import * as S from "./style";

import { ReactComponent as SidbarIcon } from "../../assets/Sidebar.svg";
import SideBarProfile from "./Profile";
import SideBarMembers from "./Members";
import SideBarWorkspace from "./WorkSpace";

function SideBar() {
  return (
    <>
      <S.MainCotainer>
        <S.Flex>
          <SidbarIcon />
          PCOT
        </S.Flex>
        <SideBarProfile />
        <button>워크스페이스 수정</button>
        <SideBarMembers />
        <SideBarWorkspace />
      </S.MainCotainer>
    </>
  );
}

export default SideBar;
