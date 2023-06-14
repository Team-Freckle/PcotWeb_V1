import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
import { ReactComponent as Reservation } from "../../../assets/Login-Logo.svg";
import * as S from "./style";
import { useLogin } from "../../../hooks/useLogin";

export const Login = () => {
  const navigate = useNavigate();
  const { onLoginChange, email, pw, onLoginSubmit } = useLogin();
  return (
    <div>
      <S.Flex>
        <S.Form onSubmit={onLoginSubmit}>
          <S.LoginText>Login</S.LoginText>
          <Reservation />
          <S.Input
            id="input-id"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onLoginChange}
          ></S.Input>
          <S.Input
            id="input-pw"
            type="password"
            placeholder="Password"
            name="password"
            value={pw}
            onChange={onLoginChange}
          ></S.Input>
          <S.Button type="submit">로그인</S.Button>
          <S.SigninLinkText>
            아직 회원이 아니신가요?&nbsp;
            <S.SigninLink onClick={() => navigate("/signin")}>회원가입</S.SigninLink>
          </S.SigninLinkText>
        </S.Form>
      </S.Flex>
    </div>
  );
};
