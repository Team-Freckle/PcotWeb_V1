import React, { useCallback, useState } from "react";
import axios from "axios";
import { Toast } from "../lib/Toast";

export const API_URL = process.env.REACT_APP_API;

export const useSignin = () => {
  const [name, SetName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [pw1, SetPw1] = useState<string>("");
  const [pw2, SetPw2] = useState<string>("");

  const URL = `${API_URL}/signup.do`;

  const onSignUpChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      SetName(e.target.value);
    } else if (e.target.name === "email") {
      SetEmail(e.target.value);
    } else if (e.target.name === "password") {
      SetPw1(e.target.value);
    } else if (e.target.name === "password2") {
      SetPw2(e.target.value);
    }
  }, []);

  const onSignUpSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (name && email && pw1 && pw2) {
        if (pw1 === pw2) {
          try {
            const response = await axios.post(URL, {
              name: name,
              email: email,
              password: pw1,
              authority: "U",
            });
            console.log(response);
            Toast.fire({
              icon: "success",
              title: "회원가입에 성공하였습니다.",
            });
          } catch (e) {
            Toast.fire({
              icon: "error",
              title: "회원가입에 실패하였습니다. \n관리자에게 문의하세요",
            });
          }
        } else {
          Toast.fire({
            icon: "error",
            title: "비밀번호가 일치하지 않습니다.",
          });
        }
      } else {
        Toast.fire({
          icon: "error",
          title: "모든 항목을 입력해주세요",
        });
      }
    },
    [name, email, pw1, pw2],
  );
  return { onSignUpChange, name, email, pw1, pw2, onSignUpSubmit };
};
