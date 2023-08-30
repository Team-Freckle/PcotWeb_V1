import React from "react";
import * as S from "../style";

import { ReactComponent as Profilechange } from "../../../assets/dummy_profilechange_icon.svg";

function SideBarMembers() {
  return (
    <S.Member>
      Members
      <S.MemberImage>
        <Profilechange />
        <Profilechange />
        <Profilechange />
      </S.MemberImage>
    </S.Member>
  );
}

export default SideBarMembers;
