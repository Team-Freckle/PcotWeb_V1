import { SidebarHeader } from "@components/SideBar/SideBarHeader";
import { Typography } from "@components/SideBar/Typography";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import addMemberBtn from "@assets/addMemberBtn.png";

export const OrganizationSideBar = (props: any) => {
  const navigate = useNavigate();

  // const { Rank, setRank, Receiver, setReceiver } = userInvite();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        rootStyles={{
          backgroundColor: "#ffffff",
        }}
        onBackdropClick={() => props.setToggle(false)}
        toggled={props.toggle}
        breakPoint="xl"
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <SidebarHeader
            onClick={() => {
              navigate("/");
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80%",
              flex: 1,
            }}
          >
            <S.Img src="https://via.placeholder.com/300" alt="testimg" />
            <div style={{ marginTop: "20px" }}>
              <Typography variant="subtitle1">Organization</Typography>
              <S.Comment>테스트코맨트트트트트</S.Comment>
            </div>
          </div>
          <S.BottomLayout>
            <S.BottomItems>
              <Typography variant="subtitle1" style={{ marginRight: "auto", marginLeft: "20px" }}>
                Members
              </Typography>
              <S.BottomMembers>
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src="https://via.placeholder.com/300" />
                <S.BottomMember src={addMemberBtn} />
              </S.BottomMembers>
            </S.BottomItems>
            <S.BottomItems>
              <Typography variant="subtitle1" style={{ marginRight: "auto", marginLeft: "20px" }}>
                Other Workspace
              </Typography>
              <S.BottomMembers>
                <S.BottomWorkspace src="https://via.placeholder.com/300" />
                <S.BottomWorkspace src="https://via.placeholder.com/300" />
                <S.BottomWorkspace src="https://via.placeholder.com/300" />
                <S.BottomWorkspace src="https://via.placeholder.com/300" />
              </S.BottomMembers>
            </S.BottomItems>
          </S.BottomLayout>
        </div>
      </Sidebar>
    </div>
  );
};
