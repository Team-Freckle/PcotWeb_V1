import React from "react";
import * as S from "./style";

import SideBarProfile from "./Profile";
import SideBarMembers from "./Members";
import SideBarWorkspace from "./WorkSpace";
import WorkChangeBtn from "./Workbutton";

const SideBarOptions = () => {
  return (
    <S.MainCotainer>
      <SideBarProfile />
      <WorkChangeBtn />
      <SideBarMembers />
      <SideBarWorkspace />
    </S.MainCotainer>
  );
};

export default SideBarOptions;
