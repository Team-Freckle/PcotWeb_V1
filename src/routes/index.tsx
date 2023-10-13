import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "@components/Auth/Login";
import { Signin } from "@components/Auth/Signin";
import Profile from "@pages/Profile";
import { NotFound } from "@components/NotFound";
import { Home } from "@pages/Home";
import { EmailVerify } from "@pages/EmailVerify";
import GitGraph from "@components/GitGraph";
import { SideBar } from "@components/SideBar";
import { WorkspaceList } from "@components/WorkspaceList";
import DummyPage from "@components/Organization";
import { MakeWorkSpace } from "@pages/MakeWorkSpace";

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
        <Route path="/graph" element={<GitGraph />} />
        <Route path="/test" element={<SideBar />} />
        <Route path="/work" element={<MakeWorkSpace />} />
        <Route path="/list" element={<WorkspaceList />} />\
        <Route path="/org" element={<DummyPage />} />\
      </Routes>
    </div>
  );
};
