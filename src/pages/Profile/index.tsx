import React, { useEffect, useState } from "react";

import * as S from "./style";

import ProfileImgd from "@assets/Login-Logo.svg";
import { useChangeProfile } from "@hooks/useChangeProfile";
import { useGetProfile } from "@hooks/useGetProfile";
import { useNavigate } from "react-router-dom";
import { ProfileHover } from "@components/ProfileHover";
import { ConfirmAlert } from "@lib/Confirm";
import { useLogout } from "@hooks/useLogout";
import { ProfileHover } from "@components/ProfileHover";
import { ProfileSideBar } from "@components/SideBar/SideBars/ProfileSideBar";
import Hambuger from "@assets/Hambuger.svg";

export const API_URL = process.env.REACT_APP_API;

const Profile = () => {
  const navigate = useNavigate();
  const { onProfileChange, Name, Email, Bio, setName, setEmail, setBio, onProfileSubmit } =
    useChangeProfile();
  const { onGetProfile } = useGetProfile();
  const { onLogout } = useLogout();
  const [ProfileImg, setProfileImg] = useState<any>(ProfileImgd);

  useEffect(() => {
    onGetProfile()
      .then((res) => {
        setProfileImg(`${API_URL}/v2/search/user/image?email=${res.data.email}`);
        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <S.FloatBox>
        <ProfileSideBar />
      </S.FloatBox>
      <S.Hambuger src={Hambuger} />
      <h1 style={{ color: "#316AE2", marginTop: "0" }}>Profile</h1>
      <form onSubmit={onProfileSubmit}>
        <ProfileHover name="ProfileImg" value={ProfileImg} />
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
                  maxLength={8}
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
                  readOnly
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
          <S.ButtonBox>
            <S.LogoutBtn
              type="button"
              onClick={() => {
                ConfirmAlert("로그아웃", "예", "아니오", "로그아웃 하셨습니다", (confirmed) => {
                  if (confirmed) {
                    onLogout();
                  }
                });
              }}
            >
              로그아웃
            </S.LogoutBtn>
          </S.ButtonBox>
        </S.Box>
      </form>
      <div>
        <S.LogoutText
          onClick={() => {
            ConfirmAlert("로그아웃", "예", "아니오", "로그아웃 하셨습니다", (confirmed) => {
              if (confirmed) {
                onLogout();
              }
            });
          }}
        >
          로그아웃
        </S.LogoutText>
      </div>
    </div>
  );
};

export default Profile;
