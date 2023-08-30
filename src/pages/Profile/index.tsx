import React from "react";

import * as S from "./style";
import "../../styles/styles.css";

import ProfileImg from "../../assets/profile.svg";
import { useProfile } from "../../hooks/useProfile";

const Profile = () => {
  const { onProfileChange, Name, Email, Bio, onProfileSubmit } = useProfile();
  return (
    <div>
      <h1>Profile</h1>
      <img src={ProfileImg} />
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
