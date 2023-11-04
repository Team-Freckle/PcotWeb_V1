import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "@components/Auth/Login";
import { Signin } from "@components/Auth/Signin";
import { Profile } from "@pages/Profile";
import { NotFound } from "@components/NotFound";
import { Home } from "@pages/Home";
import { EmailVerify } from "@pages/EmailVerify";
import GitGraph from "@components/GitGraph";
import { MakeWorkSpace } from "@pages/MakeWorkSpace";
import { MakeOrganization } from "@pages/MakeOrganization";
import { Organization } from "@pages/Organization";
import { AnimatePresence } from "framer-motion";
import { SetprofileImg } from "@pages/SetProfileImage";
import { OrganizationList } from "@components/OrganizationList";
import { PsdComparisonModal } from "@components/PsdComparisonModal";
import { Workspace } from "@pages/Workspace";
// import Chart from "@components/Organization/Chart";

export const Router = () => {
  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/EmailVerify" element={<EmailVerify />} />

          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/graph" element={<GitGraph />} />

          {/* <Route path="/organization" element={<OrganizationList />} /> */}
          <Route path="/organization/:name" element={<Organization />} />
          <Route path="/organization/create" element={<MakeOrganization />} />
          <Route path="/organization/create/profile" element={<SetprofileImg />} />

          {/* <Route path="workspace" /> */}
          {/* <Route path="/chart" element={<Chart />} /> */}
          <Route path="/workspace/:name" element={<Workspace />} />
          <Route path="/workspace/create/:name" element={<MakeWorkSpace />} />
          <Route path="/test" element={<OrganizationList />} />
          <Route path="/test2" element={<PsdComparisonModal />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
