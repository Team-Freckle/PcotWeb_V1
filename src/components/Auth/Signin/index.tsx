import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
import * as S from "./style";
import { useSignin } from "../../../hooks/useSignin";

export const Signin = () => {
  const navigate = useNavigate();
  const { onSignUpChange, name, email, pw1, pw2, onSignUpSubmit } = useSignin();
  return (
    <div>
      <S.Flex>
        <S.Form onSubmit={onSignUpSubmit}>
          <S.SigninText>Signup</S.SigninText>
          <S.Inputs>
            <S.Input
              id="sign_up_name"
              type="text"
              name="name"
              value={name}
              onChange={onSignUpChange}
            />
            <S.Input
              id="sign_up_email"
              type="email"
              name="email"
              value={email}
              onChange={onSignUpChange}
            />
            <S.Input id="sign_up_email_check" type="text" />
            <S.Input
              id="sign_up_password"
              type="password"
              name="password"
              value={pw1}
              onChange={onSignUpChange}
            />
            <S.Input
              id="sign_up_password_check"
              type="password"
              name="password2"
              value={pw2}
              onChange={onSignUpChange}
            />
            <S.Button type="submit">회원가입</S.Button>
            <S.SigninLinkText>
              혹시 회원이신가요?&nbsp;
              <S.SigninLink onClick={() => navigate("/signin")}>로그인</S.SigninLink>
            </S.SigninLinkText>
          </S.Inputs>
        </S.Form>
      </S.Flex>
    </div>
  );
};
