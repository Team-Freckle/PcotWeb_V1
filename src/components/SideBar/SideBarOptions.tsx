import React from "react";
import * as S from "./style";

import SideBarProfile from "./Profile";
import SideBarMembers from "./Members";
import SideBarWorkspace from "./WorkSpace";
import WorkChangeBtn from "./Workbutton";
import ProgressExampleActive from "./ProgressBar";

const SideBarOptions = () => {
  return (
    <S.MainCotainer>
      <SideBarProfile />
      <WorkChangeBtn />
      <SideBarMembers />
      <SideBarWorkspace />
      <ProgressExampleActive />
    </S.MainCotainer>
  );
};

export default SideBarOptions;
