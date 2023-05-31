import React from "react";
// import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
// import styles from "../../../style/signup-style.module.css";
import * as S from "./style";

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.Flex>
        <S.Form>
          <S.SigninText>Signup</S.SigninText>
          <S.Inputs>
            <S.Input id="sign_up_email" type="email" />
            <S.Input id="sign_up_email_check" type="text" />
            <S.Input id="sign_up_password" type="password" />
            <S.Input id="sign_up_password_check" type="password" />
            <S.Button type="button">회원가입</S.Button>
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
