import React, { useCallback, useState } from "react";
import axios from "axios";
import { ToastError, ToastSuccess, ToastWarning } from "@lib/Toast";
import { useNavigate } from "react-router-dom";
import useEmailVerify from "@hooks/useEmailVerify";

export const API_URL = process.env.REACT_APP_API;

export const useSignin = () => {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    pw1: "",
    pw2: "",
  });

  const URL = `${API_URL}/v2/signup.do`;

  const onSignUpChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, pw1, pw2 } = signUp;

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
          ToastSuccess("회원가입에 성공하였습니다.");
          useEmailVerify(email);
          navigate("/EmailVerify", {
            state: { Email: email },
          });
        } catch (error) {
          ToastError("회원가입에 실패했습니다.\n관리자에게 문의해주세요");
        }
      } else {
        ToastError("비밀번호가 일치하지 않습니다.");
      }
    } else {
      ToastWarning("모든 항목을 입력해주세요");
    }
  };

  return { onSignUpChange, signUp, onSignUpSubmit };
};
