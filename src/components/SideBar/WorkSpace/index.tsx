import React from "react";
import * as S from "../style";

import { ReactComponent as Profilechange } from "../../../assets/dummy_profilechange_icon.svg";

function SideBarWorkspace() {
  return (
    <S.Member>
      Other Workspace
      <S.MemberImage>
        <Profilechange />
        <Profilechange />
        <Profilechange />
      </S.MemberImage>
    </S.Member>
  );
}

export default SideBarWorkspace;
