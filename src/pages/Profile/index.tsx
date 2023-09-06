import React, { useEffect, useState } from "react";

import * as S from "./style";
import "../../styles/styles.css";

import ProfileBGImg from "@assets/profileBG.png";
import ProfileImg from "@assets/Login-Logo.svg";
import Bliend from "@assets/blind.png";
import { useProfile } from "@hooks/useProfile";
import { useGetProfile } from "@hooks/useGetProfile";

const Profile = () => {
  const { onProfileChange, Name, Email, Bio, onProfileSubmit } = useProfile();
  const { onGetProfile } = useGetProfile();
  const [ProfileBg, setProfileBg] = useState<string>(ProfileBGImg);

  useEffect(() => {
    onGetProfile();
  }, []);

  const handleProfilehover = () => {
    setProfileBg(Bliend);
    console.log("hover");
  };

  const handleProfileOut = () => {
    setProfileBg(ProfileBGImg);
    console.log("out");
  };

  return (
    <div>
      <h1 style={{ color: "#316AE2" }}>Profile</h1>
      <S.ImgBox>
        <div onMouseEnter={handleProfilehover} onMouseLeave={handleProfileOut}>
          <S.ProfileImg src={ProfileImg} />
        </div>
      </S.ImgBox>

      <form onSubmit={onProfileSubmit}>
        <S.Box>
          <S.Inputs>
            <S.InputBoxs>
              <S.InputBox>
                <S.InputText style={{ bottom: "60px" }}>Name</S.InputText>
                <S.Input
                  type="text"
                  placeholder="내용을 입력해주세요."
                  id="name"
                  value={Name}
                  onChange={onProfileChange}
                />
              </S.InputBox>

              <S.InputBox>
                <S.InputText style={{ bottom: "60px" }}>Email</S.InputText>
                <S.Input
                  type="text"
                  placeholder="내용을 입력해주세요."
                  id="email"
                  value={Email}
                  onChange={onProfileChange}
                />
              </S.InputBox>
            </S.InputBoxs>

            <S.BioBox>
              <S.InputText style={{ bottom: "140px" }}>Bio</S.InputText>
              <S.BioInput
                placeholder="내용을 입력해주세요."
                id="bio"
                value={Bio}
                onChange={onProfileChange}
              />
            </S.BioBox>
          </S.Inputs>

          <S.ButtonBox>
            <S.SubmitBtn type="submit">Edit</S.SubmitBtn>
          </S.ButtonBox>
        </S.Box>
      </form>
    </div>
  );
};

export default Profile;
