import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Auth/Login";
import { Signin } from "../components/Auth/Signin";

import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
import { EmailVerify } from "../pages/EmailVerify";
import SideBar from "../components/SideBar/SideBarOptions";

import MainSideBar from "../components/SideBar/MainSideBar";

// import Test from "../components/SideBar/test";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="/side" element={<SideBar />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/test" element={<SidebarExampleSidebar />} /> */}
        <Route path="/sidetest" element={<MainSideBar />} />
        {/* <Route path="/hamtest" element={<Hamburger />} /> */}
      </Routes>
    </div>
  );
};
