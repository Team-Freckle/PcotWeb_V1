import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
import { ReactComponent as Reservation } from "../../../assets/Login-Logo.svg";
import * as S from "./style";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.Flex>
        <S.Form>
          <S.LoginText>Login</S.LoginText>
          <Reservation />
          <S.Input id="input-id" placeholder="Email"></S.Input>
          <S.Input id="input-pw" type="password" placeholder="Password"></S.Input>
          <S.Button>로그인</S.Button>
          <S.SigninLinkText>
            아직 회원이 아니신가요?&nbsp;
            <S.SigninLink onClick={() => navigate("/signin")}>회원가입</S.SigninLink>
          </S.SigninLinkText>
        </S.Form>
      </S.Flex>
    </div>
  );
};
