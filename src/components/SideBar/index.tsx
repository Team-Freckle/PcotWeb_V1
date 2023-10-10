import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { RxTextAlignJustify } from "react-icons/rx";
import { SidebarHeader } from "./SideBarHeader";
import { Typography } from "./Typography";
import axios from "axios";
// import { link } from "fs";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const SideBar = () => {
  const navigate = useNavigate();
  const [ordata, setData] = useState<any[]>([]);
  const API = `${API_URL}/v2/search/organization/?query=test&page=1`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setData(response.data.data); // Use response.data.data to access the organization data
      })
      .catch((error) => {
        console.error("데이터를 로딩중 오류 발생:", error);
      });
  }, [API]);

  const gotoPage = () => {
    navigate("/org");
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Organizations
              </Typography>
            </div>
            <Menu onClick={gotoPage}>
              {ordata.map((item: any) => (
                <MenuItem key={item.idx}>
                  <div>{item.name}</div>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
