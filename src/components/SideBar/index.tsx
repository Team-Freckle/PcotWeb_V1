import React from "react";
import * as S from "./style";

import { ReactComponent as Reservation } from "../../assets/Login-Logo.svg";
import { ReactComponent as SidbarIcon } from "../../assets/Sidebar.svg";
import { ReactComponent as Profilechange } from "../../assets/dummy_profilechange_icon.svg";

function SideBar() {
  return (
    <>
      <S.MainCotainer>
        <S.Flex>
          <SidbarIcon />
          PCOT
        </S.Flex>
        <S.ImgBox>
          <Reservation />
          뿌링클
          <S.Content>콩너리ㅏㅁ너리ㅏ멍닌어ㅣㅏ </S.Content>
        </S.ImgBox>
        <button>워크스페이스 수정</button>
        <S.Member>
          Members
          <S.MemberImage>
            <Profilechange />
            <Profilechange />
            <Profilechange />
          </S.MemberImage>
        </S.Member>
      </S.MainCotainer>
    </>
  );
}

export default SideBar;
