import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "@components/Auth/Login";
import { Signin } from "@components/Auth/Signin";
import Profile from "@pages/Profile";
import { NotFound } from "@components/NotFound";
import { Home } from "@pages/Home";
import { EmailVerify } from "@pages/EmailVerify";
import { SideBar } from "@components/SideBar";
import { MakeOrganization } from "@pages/MakeOrganization";
import { WorkspaceList } from "@components/WorkspaceList";
import OrganizationChart from "@components/Organization/Chart";
import Test from "@components/Organization/test";
import NewsItem from "@components/Organization/test";
import Alarm from "@components/Alarm";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<SideBar />} />
        <Route path="/work" element={<MakeOrganization />} />
        <Route path="/list" element={<WorkspaceList />} />
        <Route path="/chart" element={<OrganizationChart />} />
        <Route path="/testa" element={<Alarm />} />
      </Routes>
    </div>
  );
};
