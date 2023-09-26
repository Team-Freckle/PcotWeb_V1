import styled from "@emotion/styled";
import React from "react";
import { Typography } from "@components/SideBar/Typography";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ ...rest }) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          PCOT
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
