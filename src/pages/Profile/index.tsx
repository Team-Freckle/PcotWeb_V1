import React, { useEffect, useRef, useState } from "react";

import * as S from "./style";
import "../../styles/styles.css";

import ProfileImgd from "@assets/Login-Logo.svg";
import Bliend from "@assets/test.svg";
import { useProfile } from "@hooks/useChangeProfile";
import { useGetProfile } from "@hooks/useGetProfile";

const Profile = () => {
  const { onProfileChange, Name, Email, Bio, NewprofileImg, onProfileSubmit } = useProfile();
  const { onGetProfile } = useGetProfile();
  const [ProfileBg, setProfileBg] = useState<string>("");
  const [ProfileImg, setProfileImg] = useState<string>(ProfileImgd);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onGetProfile();
  }, []);

  const handleProfilehover = () => {
    setProfileBg(Bliend);
  };

  const handleProfileOut = () => {
    setProfileBg("");
  };

  const handleFileSelect = (e: any) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setProfileImg(URL.createObjectURL(selectedFile));
      onProfileChange(e);
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <h1 style={{ color: "#316AE2" }}>Profile</h1>
      <form onSubmit={onProfileSubmit}>
        <S.ImgBox>
          <div
            onMouseEnter={handleProfilehover}
            onMouseLeave={handleProfileOut}
            onClick={openFileInput}
          >
            <S.ProfileImg src={ProfileImg} />
            <S.ProfileBg src={ProfileBg} />
          </div>
        </S.ImgBox>
        <input
          id="profileImg"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          value={NewprofileImg}
          onChange={handleFileSelect}
        />

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
