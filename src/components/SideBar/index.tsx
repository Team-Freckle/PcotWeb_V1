import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { SidebarHeader } from "./SideBarHeader";
import { Typography } from "./Typography";
import { SidebarFooter } from "./SideBarFooter";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export const SideBar = (props: any) => {
  const navigate = useNavigate();
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
          <SidebarHeader />
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
              <MenuItem prefix={<RxHamburgerMenu />} style={{ borderRadius: "10px" }}>
                <div style={{ textAlign: "left", marginLeft: "10px" }}>Test</div>
              </MenuItem>
              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <Typography
                  variant="body1"
                  color="#607489"
                  style={{ textAlign: "left", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/createOrganization");
                  }}
                >
                  + add Organizaton
                </Typography>
              </div>
            </Menu>
          </div>
          <SidebarFooter profileData={props.profileData} />
        </div>
      </Sidebar>
    </div>
  );
};
