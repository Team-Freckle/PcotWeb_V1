import axios from "axios";
import React, { useCallback, useState } from "react";

import { ToastError, ToastSuccess, ToastWarning } from "../lib/Toast";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const URL = `${API_URL}/login.do`;

  const onLoginChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPw(e.target.value);
    }
  }, []);

  const onLoginSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email && pw) {
        try {
          const response = await axios.post(URL, {
            email: email,
            password: pw,
          });
          console.log(response);
          ToastSuccess("로그인에 성공하였습니다.");
          navigate("/");
        } catch (error) {
          ToastError("로그인에 실패했습니다.");
        }
      } else {
        ToastWarning("모든 항목을 입력해주세요");
      }
    },
    [email, pw, URL],
  );
  return { onLoginChange, email, pw, onLoginSubmit };
};
