import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Arrow from "@assets/arrow.svg";

import * as S from "./style";

export const API_URL = process.env.REACT_APP_API;

const extractUsername = (email: string) => {
  if (email) {
    const parts = email.split("@");
    if (parts.length === 2) {
      return parts[0];
    }
  }
  return "유효하지 않은 이메일 주소";
};

const StyledSidebarFooter = styled.div`
  width: 100%;
  border-top: 1px solid #e9e9e7;
  cursor: pointer;
`;

export const SidebarFooter = (props: any) => {
  const [profileImg, setProfileImg] = useState<any>(null);

  useEffect(() => {
    if (props.profileData.email) {
      setProfileImg(`${API_URL}/v2/search/user/image?email=${props.profileData.email}`);
    }
  }, [props.profileData.email]);

  const username = extractUsername(props.profileData.email);

  const truncatedEmail = username.length > 8 ? username.slice(0, 8) + "···" : username;

  return (
    <div>
      <StyledSidebarFooter>
        <S.FooterItem>
          {profileImg && <S.FooterIcon src={profileImg} alt="logo" />}
          <S.FooterText>
            <S.FooterTextBold>{props.profileData.name}</S.FooterTextBold> {truncatedEmail}
          </S.FooterText>
          <S.FooterArrow src={Arrow} />
        </S.FooterItem>
      </StyledSidebarFooter>
    </div>
  );
};
