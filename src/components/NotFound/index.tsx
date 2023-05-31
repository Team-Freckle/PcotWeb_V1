import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../lib/Toast";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Toast.fire({
      icon: "error",
      title: "존재하지 않는 페이지입니다",
    });
    navigate("/");
  }, [navigate]);
  return <></>;
};
