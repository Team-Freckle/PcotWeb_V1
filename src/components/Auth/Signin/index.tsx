import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/styles.css";
import * as S from "./style";
import { useSignin } from "@hooks/useSignin";
import PwSee from "@assets/password_see_icon.svg";
import PwOff from "@assets/eyeoff.svg";
import Wrapper from "@components/Wrapper";

export const Signin = () => {
  const navigate = useNavigate();
  const { ...attr } = useSignin();
  const [pwIcon, setPwIcon] = useState(PwSee);
  const [pwIcon2, setPwIcon2] = useState(PwSee);

  const onPwSee = () => {
    const pw = document.getElementById("sign_up_password") as HTMLInputElement;
    if (pw.type === "password") {
      pw.type = "text";
      setPwIcon(PwOff);
    } else {
      pw.type = "password";
      setPwIcon(PwSee);
    }
  };

  const onPwSeeCK = () => {
    const pw = document.getElementById("sign_up_password_check") as HTMLInputElement;
    if (pw.type === "password") {
      pw.type = "text";
      setPwIcon2(PwOff);
    } else {
      pw.type = "password";
      setPwIcon2(PwSee);
    }
  };

  return (
    <div>
      <Wrapper>
        <S.Flex>
          <S.Form onSubmit={attr.onSignUpSubmit}>
            <S.SigninText>Signup</S.SigninText>
            <S.Inputs>
              <S.Input
                id="sign_up_name"
                placeholder="Name"
                type="text"
                name="name"
                value={attr.signUp.name}
                onChange={attr.onSignUpChange}
                maxLength={8}
              />
              <S.Input
                id="sign_up_email"
                placeholder="Email"
                type="email"
                name="email"
                value={attr.signUp.email}
                onChange={attr.onSignUpChange}
              />
              <S.InputLabel>
                <S.Input
                  id="sign_up_password"
                  placeholder="Password"
                  type="password"
                  name="pw1"
                  value={attr.signUp.pw1}
                  onChange={attr.onSignUpChange}
                />
                <S.InputButton src={pwIcon} onClick={onPwSee}></S.InputButton>
              </S.InputLabel>
              <S.InputLabel>
                <S.Input
                  id="sign_up_password_check"
                  placeholder="Password Check"
                  type="password"
                  name="pw2"
                  value={attr.signUp.pw2}
                  onChange={attr.onSignUpChange}
                />
                <S.InputButton src={pwIcon2} onClick={onPwSeeCK}></S.InputButton>
              </S.InputLabel>

              <S.Button type="submit">회원가입</S.Button>
              <S.SigninLinkText>
                혹시 회원이신가요?&nbsp;
                <S.SigninLink onClick={() => navigate("/login")}>로그인</S.SigninLink>
              </S.SigninLinkText>
            </S.Inputs>
          </S.Form>
        </S.Flex>
      </Wrapper>
    </div>
  );
};
