import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./style";

import Wrapper from "@components/Wrapper";
import { ProfileSideBar } from "@components/SideBar/SideBars/ProfileSideBar";
import { ProfileHover } from "@components/ProfileHover";
import { useChangeOrganizationImg } from "@hooks/useChangeOrganizationImg";
import { ToastWarning } from "@lib/Toast";
import { ConfirmAlert } from "@lib/Confirm";

import img1 from "@assets/profileImg/1.svg";
import img2 from "@assets/profileImg/2.svg";
import img3 from "@assets/profileImg/3.svg";
import img4 from "@assets/profileImg/4.svg";
import img5 from "@assets/profileImg/5.svg";
import img6 from "@assets/profileImg/6.svg";
import img7 from "@assets/profileImg/7.svg";
import img8 from "@assets/profileImg/8.svg";
import img9 from "@assets/profileImg/9.svg";
import img10 from "@assets/profileImg/10.svg";
import img11 from "@assets/profileImg/11.svg";

const imageFiles = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export const SetprofileImg = () => {
  const [Img, setImg] = useState<any | null>(null);
  const [Data, setData] = useState<any | null>(null);

  const [OrgName, setOrgName] = useState<string>("");
  const [OrgComment, setOrgComment] = useState<string>("");

  const { onOrganizationImgSubmit } = useChangeOrganizationImg();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      ToastWarning("잘못된 접근입니다.");
      navigate("/");
    } else {
      const randomIndex = Math.floor(Math.random() * imageFiles.length);
      const randomImage = imageFiles[randomIndex];
      setImg(randomImage);
      setOrgName(location.state.name);
      setOrgComment(location.state.comment);
    }
  }, []);

  const onSubmit = () => {
    if (!Data) {
      ToastWarning("이미지를 선택해주세요.");
      return;
    } else {
      const formData = new FormData();
      formData.append("image", Data);
      formData.append("organization", OrgName);
      onOrganizationImgSubmit(formData);
      navigate("", { replace: true });
      navigate(`/organization/${OrgName}`);
    }
  };

  const onNotChangeSubmit = () => {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const randomImage = imageFiles[randomIndex];
    setImg(randomImage);
    const formData = new FormData();
    formData.append("image", Img); // TODO : 서버가 해결한대요
    formData.append("organization", "wqsdsfwaf");
    onOrganizationImgSubmit(formData);
  };

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <Wrapper>
        <S.FloatBox>
          <ProfileSideBar />
        </S.FloatBox>
        <S.Container>
          <S.Box>
            <form style={{ height: "600px" }}>
              <S.Text style={{ color: "#316AE2" }}>Make Organization</S.Text>
              <ProfileHover name="OrganizationImg" value={Img} setImg={setImg} setData={setData} />
              <S.TextName>{OrgName}</S.TextName>
              <S.TextComment>
                {OrgComment.length > 15 ? OrgComment.substring(0, 15) + "···" : OrgComment}
              </S.TextComment>
              <S.Inputs>
                <S.ButtonBox>
                  <S.DefaultButton
                    type="button"
                    onClick={() =>
                      ConfirmAlert(
                        "랜덤한 기본 이미지로 설정하시겠습니까?",
                        "예",
                        "아니오",
                        "설정 완료",
                        (confirmed) => {
                          if (confirmed) {
                            onNotChangeSubmit();
                          }
                        },
                      )
                    }
                  >
                    Set the default picture
                  </S.DefaultButton>
                  <S.SubmitBtn type="button" onClick={onSubmit}>
                    Make Organization
                  </S.SubmitBtn>
                </S.ButtonBox>
              </S.Inputs>
            </form>
          </S.Box>
        </S.Container>
      </Wrapper>
    </div>
  );
};
