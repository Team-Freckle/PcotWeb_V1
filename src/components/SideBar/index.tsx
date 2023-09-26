import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RxTextAlignJustify } from "react-icons/rx";
import { SidebarHeader } from "./SideBarHeader";
import { Typography } from "./Typography";

export const SideBar = (props: any) => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                // style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                Organizations
              </Typography>
            </div>
            <Menu>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <MenuItem>응아잇</MenuItem>
              <button>sad</button>
            </Menu>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
