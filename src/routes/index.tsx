import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Auth/Login";
import { Signin } from "../components/Auth/Signin";

import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
import { EmailVerify } from "../pages/EmailVerify";
import MainSideBar from "../components/SideBar/MainSideBar";
import Profile from "@pages/Profile";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="side" element={<MainSideBar />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
