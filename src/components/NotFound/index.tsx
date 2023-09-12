import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastError } from "@lib/Toast";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    ToastError("존재하지 않는 페이지입니다");
    navigate("/");
  }, [navigate]);
  return <></>;
};
