import styled from "@emotion/styled";
import React from "react";
import LoginLogo from "@assets/Login-Logo.svg";
import Arrow from "@assets/arrow.svg";

import * as S from "./style";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledSidebarFooter = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* padding: 30px; */
  /* color: white; */
  border-top: 1px solid #e9e9e7;
`;

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ ...rest }) => {
  return (
    <div>
      <StyledSidebarFooter {...rest}>
        <S.FooterItem>
          <S.FooterIcon src={LoginLogo} alt="logo" />
          <S.FooterText>
            <S.FooterTextBold>김경민</S.FooterTextBold> @qwea
          </S.FooterText>
          <S.FooterArrow src={Arrow} />
        </S.FooterItem>
      </StyledSidebarFooter>
    </div>
  );
};
