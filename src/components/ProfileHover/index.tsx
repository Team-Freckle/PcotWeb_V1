import React, { useRef, useState } from "react";
import * as S from "./style";

import ProfileImgd from "@assets/Login-Logo.svg";
import Bliend from "@assets/test.svg";

export const ProfileHover = (props: any) => {
  const [ProfileBg, setProfileBg] = useState<string>("");
  const [ProfileImg, setProfileImg] = useState<any>(ProfileImgd);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilehover = () => {
    setProfileBg(Bliend);
  };

  const handleProfileOut = () => {
    setProfileBg("");
  };

  const handleFileSelect = (e: any) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const image = selectedFile;
      setProfileImg(URL.createObjectURL(selectedFile));
      //   onProfileImgChange(image);
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
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
        onChange={handleFileSelect}
      />
    </div>
  );
};
