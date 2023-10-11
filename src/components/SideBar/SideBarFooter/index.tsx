import styled from "@emotion/styled";
import React from "react";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledSidebarFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: white;
  border-top: 1px solid #000000;
`;

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledSidebarFooter {...rest}>as</StyledSidebarFooter>
    </div>
  );
};
