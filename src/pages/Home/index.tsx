import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

import Profile from "@assets/Login-Logo.svg";
import Serch from "@assets/search.svg";
import Banner from "@assets/banner.svg";
import { WorkspaceList } from "@components/WorkspaceList";
import { useGetProfile } from "@hooks/useGetProfile";

export const API_URL = process.env.REACT_APP_API;

export const Home = () => {
  const navigate = useNavigate();
  const { onGetProfile } = useGetProfile();
  const [ProfileData, setProfileData] = useState<any>([{}]);
  const [ProfileImg, setProfileImg] = useState<any>(Profile);

  useEffect(() => {
    onGetProfile()
      .then((res) => {
        setProfileData(res.data);
        setProfileImg(`${API_URL}/v2/search/user/image?email=${res.data.email}`);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <S.Container>
      <S.ProfileBox>
        <S.ProfileImg src={ProfileImg} />
        <div>
          <S.NameText>{ProfileData.name} 회원님</S.NameText>
          <S.LinkText
            onClick={() => {
              navigate("/profile");
            }}
          >
            프로필 보러가기
            &gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </S.LinkText>
        </div>
      </S.ProfileBox>

      <S.InputBox>
        <S.InputLabel>
          <S.SerchInput placeholder="검색어를 입력해주세요." />
          <S.InputButton src={Serch} />
        </S.InputLabel>
      </S.InputBox>

      <S.Banner src={Banner}></S.Banner>

      <S.Main>
        <WorkspaceList name="recents" />
      </S.Main>
    </S.Container>
  );
};
