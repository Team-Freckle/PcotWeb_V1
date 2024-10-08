import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "@components/Auth/Login";
import { Signin } from "@components/Auth/Signin";
import { Profile } from "@pages/Profile";
import { NotFound } from "@components/NotFound";
import { Home } from "@pages/Home";
import { EmailVerify } from "@pages/EmailVerify";
import { MakeWorkSpace } from "@pages/MakeWorkSpace";
import { MakeOrganization } from "@pages/MakeOrganization";
import { Organization } from "@pages/Organization";
import { AnimatePresence } from "framer-motion";
import { SetprofileImg } from "@pages/SetProfileImage";
import { OrganizationList } from "@components/OrganizationList";
import { Workspace } from "@pages/Workspace";
import { CreateNode } from "@pages/CreateNode";

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

          {/* <Route path="/organization" element={<OrganizationList />} /> */}
          <Route path="/organization/:organization" element={<Organization />} />
          <Route path="/organization/list/:query" element={<OrganizationList />} />
          <Route path="/organization/create" element={<MakeOrganization />} />
          <Route path="/organization/create/profile" element={<SetprofileImg />} />

          {/* <Route path="workspace" /> */}
          {/* <Route path="/compare" element={<PsdComparisonModal />} /> */}
          <Route path="/workspace/:organization/:workspace" element={<Workspace />} />
          <Route path="/workspace/create/:organization" element={<MakeWorkSpace />} />
          <Route path="/create-node/:organization/:workspace" element={<CreateNode />} />
          <Route path="/test" element={<OrganizationList />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
