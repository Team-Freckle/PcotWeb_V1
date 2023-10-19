import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

import Bliend from "@assets/test.svg";
import { useChangeProfileImg } from "@hooks/useChangeProfileImg";

export const ProfileHover = (props: any) => {
  const [ProfileBg, setProfileBg] = useState<string>("");
  const [ProfileImg, setProfileImg] = useState<any>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { onProfileImgSubmit } = useChangeProfileImg();

  useEffect(() => {
    setProfileImg(props.value);
  }, [props.value]);

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
      const name = props.name;
      setProfileImg(URL.createObjectURL(image));
      // props.Change(URL.createObjectURL(image));
      onProfileImgSubmit(name, image);
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
