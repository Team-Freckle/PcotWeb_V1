import { SidebarHeader } from "@components/SideBar/SideBarHeader";
import { Typography } from "@components/SideBar/Typography";
import React, { useEffect, useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./style";
import addMemberBtn from "@assets/addMemberBtn.png";
import { useGetOrganizationInfo } from "@hooks/useGetOrganizationInfo";
import { useWorkspaceList } from "@hooks/useWorkspaceList";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationSideBar = (props: any) => {
  const navigate = useNavigate();
  const { organization } = useParams();
  const [organizationInfo, setOrganizationInfo] = useState<any>([]);
  const [organizationMember, setOrganizationMember] = useState<Array<any>>([]);
  const [workspaceList, setWorkspaceList] = useState<Array<any>>([]);
  const { serchOrganizationMamber, serchOrganizationMoreInfo } = useGetOrganizationInfo();
  const { onRecentsListGet } = useWorkspaceList();

  useEffect(() => {
    serchOrganizationMoreInfo(organization).then((res) => {
      setOrganizationInfo(res.data);
    });
    serchOrganizationMamber(organization).then((res) => {
      setOrganizationMember(
        res.data.map((list: any) => (
          <S.BottomMember
            key={list.email}
            src={`${API_URL}/v2/search/user/image?email=${list.email}`}
            alt="Memberimg"
          />
        )),
      );
    });
    onRecentsListGet("recents").then((res: any) => {
      setWorkspaceList(
        res.map((list: any) => (
          <S.BottomWorkspace
            key={list.createTime}
            src={`${API_URL}/v2/search/workspace/image?organization=${list.organizationName}&workspace=${list.name}`}
            onClick={() => navigate(`/workspace/${list.organizationName}/${list.name}`)}
          />
        )),
      );
    });
  }, []);

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
            <S.Img
              src={`${API_URL}/v2/search/organization/image?name=${organizationInfo.name}`}
              alt="Orgimg"
            />
            <div style={{ marginTop: "20px" }}>
              <Typography variant="subtitle1">{organizationInfo.name}</Typography>
              <S.Comment>{organizationInfo.comment}</S.Comment>
            </div>
          </div>
          <S.BottomLayout>
            <S.BottomItems>
              <Typography variant="subtitle1" style={{ marginRight: "auto", marginLeft: "20px" }}>
                Members
              </Typography>
              <S.BottomMembers>
                {organizationMember}
                {/* <S.BottomMember
                  src={`${API_URL}/v2/search/user/image?email=test1@test.er`}
                  alt="testimg"
                /> */}
                <S.BottomMember src={addMemberBtn} />
              </S.BottomMembers>
            </S.BottomItems>
            <S.BottomItems>
              <Typography variant="subtitle1" style={{ marginRight: "auto", marginLeft: "20px" }}>
                Other Workspace
              </Typography>
              <S.BottomMembers>{workspaceList}</S.BottomMembers>
            </S.BottomItems>
          </S.BottomLayout>
        </div>
      </Sidebar>
    </div>
  );
};
