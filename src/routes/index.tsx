import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "@components/Auth/Login";
import { Signin } from "@components/Auth/Signin";
import Profile from "@pages/Profile";
import { NotFound } from "@components/NotFound";
import { Home } from "@pages/Home";
import { EmailVerify } from "@pages/EmailVerify";
import GitGraph from "@components/GitGraph";
import { MakeWorkSpace } from "@pages/MakeWorkSpace";
import { MakeOrganization } from "@pages/MakeOrganization";
import { Organization } from "@pages/Organization";

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
        <Route path="/graph" element={<GitGraph />} />

        <Route path="/organization/:name" element={<Organization />} />
        <Route path="/organization/create" element={<MakeOrganization />} />

        {/* <Route path="workspace" /> */}
        <Route path="workspace/create" element={<MakeWorkSpace />} />
      </Routes>
    </div>
  );
};
