import React from "react";

import * as S from "./style";
import "../../styles/styles.css";

import ProfileImg from "../../assets/profile.svg";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <img src={ProfileImg} />
      <S.Inputs>
        <S.InputBox>
          <S.InputText>Name</S.InputText>
          <S.Input type="text" />
        </S.InputBox>

        <S.InputBox>
          <S.InputText>Email</S.InputText>
          <S.Input type="text" />
        </S.InputBox>

        <S.InputBox>
          <S.InputText>Bio</S.InputText>
          <S.Input type="text" />
        </S.InputBox>
      </S.Inputs>
    </div>
  );
};

export default Profile;
