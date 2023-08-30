import React from "react";

import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Auth/Login";
import { Signin } from "../components/Auth/Signin";
import Profile from "../pages/Profile";
import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
<<<<<<< HEAD
import { EmailVerify } from "../pages/EmailVerify";
=======
import SideBar from "../components/SideBar";
>>>>>>> jcho0127

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
=======
        <Route path="/side" element={<SideBar />} />
        {/* <Route path="*" element={<navigate to="/" />} /> */}
>>>>>>> jcho0127
      </Routes>
    </div>
  );
};
