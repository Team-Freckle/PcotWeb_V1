import React from "react";

import * as S from "./style";
import "../../styles/styles.css";

import ProfileImg from "../../assets/profile.svg";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <img src={ProfileImg} />
      <S.Box>
        <S.Inputs>
          <S.InputBoxs>
            <S.InputBox>
              <S.InputText style={{ bottom: "60px" }}>Name</S.InputText>
              <S.Input type="text" placeholder="내용을 입력해주세요." />
            </S.InputBox>

            <S.InputBox>
              <S.InputText style={{ bottom: "60px" }}>Email</S.InputText>
              <S.Input type="text" placeholder="내용을 입력해주세요." />
            </S.InputBox>
          </S.InputBoxs>

          <S.BioBox>
            <S.InputText style={{ bottom: "140px" }}>Bio</S.InputText>
            <S.BioInput placeholder="내용을 입력해주세요." />
          </S.BioBox>
          <S.SubmitBtn>Edit</S.SubmitBtn>
        </S.Inputs>
      </S.Box>
    </div>
  );
};

export default Profile;
