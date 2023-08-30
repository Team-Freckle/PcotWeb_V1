import React from "react";
import * as S from "../style";
// import SideProfile from "../../../assets/Login-Logo.svg";
import SideProfile from "../../../assets/profile_pic.svg";

// import { ReactComponent as SideProfile } from "../../../assets/Login-Logo.svg";

function SideBarProfile() {
  return (
    <>
      <S.ImgBox>
        <img src={SideProfile} />
        뿌링클
        <S.Content>콩너리ㅏㅁ너리ㅏ멍닌어ㅣㅏ</S.Content>
      </S.ImgBox>
    </>
  );
}

export default SideBarProfile;
