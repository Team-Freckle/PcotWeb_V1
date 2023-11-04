import axios from "axios";
import React, { useCallback, useState } from "react";

import { ToastError, ToastSuccess, ToastWarning } from "@lib/Toast";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    pw: "",
  });

  const URL = `${API_URL}/v2/login.do`;

  const onLoginChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, pw } = login;
    if (email && pw) {
      try {
        const response = await axios.post(
          URL,
          {
            email: email,
            password: pw,
          },
          { withCredentials: true },
        );
        ToastSuccess("로그인에 성공하였습니다.");
        navigate("/");
        return response.data;
      } catch (error) {
        ToastError("로그인에 실패했습니다.");
      }
    } else {
      ToastWarning("모든 항목을 입력해주세요");
    }
  };
  return { onLoginChange, login, onLoginSubmit };
};
