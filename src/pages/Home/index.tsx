import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

import Profile from "@assets/Login-Logo.svg";
import Serch from "@assets/search.svg";
import Banner from "@assets/banner.svg";
import { WorkspaceList } from "@components/WorkspaceList/MainWorkspaceList";
import { useGetProfile } from "@hooks/useGetProfile";
import { MainSideBar } from "@components/SideBar/SideBars/MainSideBar";
import Hambuger from "@assets/Hambuger.svg";
import Wrapper from "@components/Wrapper";

export const API_URL = process.env.REACT_APP_API;

export const Home = () => {
  const navigate = useNavigate();
  const { onGetProfile } = useGetProfile();
  const [ProfileData, setProfileData] = useState<any>([{}]);
  const [ProfileImg, setProfileImg] = useState<any>(Profile);
  const [toggle, setToggle] = useState<boolean>(false);

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
    <div>
      <Wrapper>
        <S.FloatBox>
          <MainSideBar toggle={toggle} setToggle={setToggle} profileData={ProfileData} />
        </S.FloatBox>
        <S.Container>
          <S.ProfileBox>
            <S.ProfileImg src={ProfileImg} />
            <div>
              <S.NameText>&nbsp;{ProfileData.name} 회원님</S.NameText>
              <S.LinkText
                onClick={() => {
                  navigate("/profile");
                }}
              >
                프로필 보러가기 &gt;
              </S.LinkText>
            </div>
          </S.ProfileBox>
          <S.Hambuger src={Hambuger} onClick={() => setToggle(!toggle)} />

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
      </Wrapper>
    </div>
  );
};
