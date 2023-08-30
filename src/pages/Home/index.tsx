import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

import Banner from "../../assets/banner.svg";
import Profile from "../../assets/Login-Logo.svg";
import Serch from "../../assets/search.svg";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.ProfileBox>
        <S.ProfileImg src={Profile} />
        <S.NameText>김경민 회원님</S.NameText>
        <S.LinkText
          onClick={() => {
            navigate("/profile");
          }}
        >
          프로필 보러가기 &gt;
        </S.LinkText>
        <S.InputLabel>
          <S.SerchInput placeholder="검색어를 입력해주세요." />
          <S.InputButton src={Serch} />
        </S.InputLabel>
      </S.ProfileBox>

      {/* <img src={Banner} style={{ width: "80%", height: "30%" }}></img> */}
    </div>
  );
};
