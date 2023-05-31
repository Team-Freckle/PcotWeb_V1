import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Auth/Login";
import { Signin } from "../components/Auth/Signin";
import Profile from "../components/Profile";
import { NotFound } from "../components/NotFound";

export const Router = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Whiteboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<navigate to="/" />} /> */}
      </Routes>
    </div>
  );
};
