import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
import * as S from "./style";
import { useSignin } from "../../../hooks/useSignin";
import PwSee from "../../../assets/password_see_icon.svg";

export const Signin = () => {
  const navigate = useNavigate();
  const { onSignUpChange, name, email, pw1, pw2, onSignUpSubmit } = useSignin();

  const onPwSee = () => {
    const pw = document.getElementById("sign_up_password") as HTMLInputElement;
    if (pw.type === "password") {
      pw.type = "text";
    } else {
      pw.type = "password";
    }
  };

  const onPwSeeCK = () => {
    const pw = document.getElementById("sign_up_password_check") as HTMLInputElement;
    if (pw.type === "password") {
      pw.type = "text";
    } else {
      pw.type = "password";
    }
  };

  return (
    <div>
      <S.Flex>
        <S.Form onSubmit={onSignUpSubmit}>
          <S.SigninText>Signup</S.SigninText>
          <S.Inputs>
            <S.Input
              id="sign_up_name"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={onSignUpChange}
            />
            <S.Input
              id="sign_up_email"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={onSignUpChange}
            />
            <S.InputLabel>
              <S.Input
                id="sign_up_password"
                placeholder="Password"
                type="password"
                name="password"
                value={pw1}
                onChange={onSignUpChange}
              />
              <S.InputButton src={PwSee} onClick={onPwSee}></S.InputButton>
            </S.InputLabel>
            <S.InputLabel>
              <S.Input
                id="sign_up_password_check"
                placeholder="Password Check"
                type="password"
                name="password2"
                value={pw2}
                onChange={onSignUpChange}
              />
              <S.InputButton src={PwSee} onClick={onPwSeeCK}></S.InputButton>
            </S.InputLabel>

            <S.Button type="submit">회원가입</S.Button>
            <S.SigninLinkText>
              혹시 회원이신가요?&nbsp;
              <S.SigninLink onClick={() => navigate("/login")}>로그인</S.SigninLink>
            </S.SigninLinkText>
          </S.Inputs>
        </S.Form>
      </S.Flex>
    </div>
  );
};
