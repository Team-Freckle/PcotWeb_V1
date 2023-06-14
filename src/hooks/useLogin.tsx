import axios from "axios";
import React, { useCallback, useState } from "react";

import { Toast } from "../lib/Toast";

export const API_URL = process.env.REACT_APP_API;

export const useLogin = () => {
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
          Toast.fire({
            icon: "success",
            title: "로그인에 성공하였습니다.",
          });
        } catch (error) {
          Toast.fire({
            icon: "error",
            title: "로그인에 실패하였습니다.",
          });
        }
      } else {
        Toast.fire({
          icon: "error",
          title: "모든 항목을 입력해주세요",
        });
      }
    },
    [email, pw, URL],
  );
  return { onLoginChange, email, pw, onLoginSubmit };
};
