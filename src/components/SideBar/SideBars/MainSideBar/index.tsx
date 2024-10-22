import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { SidebarHeader } from "../../SideBarHeader";
import { Typography } from "../../Typography";
import { SidebarFooter } from "../../SideBarFooter";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useOrganizationList } from "@hooks/useOrganizationList";

import * as S from "./style";

export const MainSideBar = (props: any) => {
  const navigate = useNavigate();
  const { onRecentsListGet } = useOrganizationList();
  const [organizationList, setOrganizationList] = useState<Array<any>>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    onRecentsListGet()
      .then((res) => {
        setOrganizationList(
          res.map((list: any) => (
            <div
              onClick={() => navigate(`/organization/${list.name}`)}
              key={list.idx}
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                prefix={<RxHamburgerMenu />}
                style={{ borderRadius: "10px", color: "black" }}
              >
                <div style={{ textAlign: "left", marginLeft: "10px" }}>{list.name}</div>
              </MenuItem>
            </div>
          )),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const renderOrganizationList = showMore ? organizationList : organizationList.slice(0, 3);

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
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography variant="subtitle2" fontWeight={600} style={{ textAlign: "left" }}>
                Organizations
              </Typography>
            </div>
            <Menu>
              {renderOrganizationList}
              {organizationList.length > 3 && !showMore && (
                <div style={{ padding: "10px", marginBottom: "8px" }}>
                  <S.SeeMore onClick={handleShowMore}>See more</S.SeeMore>
                </div>
              )}
              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <Typography
                  variant="body1"
                  color="#607489"
                  style={{ textAlign: "left", cursor: "pointer", marginTop: "7px" }}
                  onClick={() => {
                    navigate("/organization/create");
                  }}
                >
                  + add Organizaton
                </Typography>
              </div>
            </Menu>
          </div>
          <div
            onClick={() => {
              navigate("/profile");
            }}
          >
            <SidebarFooter profileData={props.profileData} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
