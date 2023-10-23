import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/styles.css";
import * as S from "./style";
import { useLogin } from "@hooks/useLogin";
import PwSee from "@assets/password_see_icon.svg";
import PwOff from "@assets/eyeoff.svg";
import Wrapper from "@components/Wrapper";

import img1 from "@assets/profileImg/1.svg";
import img2 from "@assets/profileImg/2.svg";
import img3 from "@assets/profileImg/3.svg";
import img4 from "@assets/profileImg/4.svg";
import img5 from "@assets/profileImg/5.svg";
import img6 from "@assets/profileImg/6.svg";
import img7 from "@assets/profileImg/7.svg";
import img8 from "@assets/profileImg/8.svg";
import img9 from "@assets/profileImg/9.svg";
import img10 from "@assets/profileImg/10.svg";
import img11 from "@assets/profileImg/11.svg";
import lol from "@assets/profileImg/lol.svg";

const profileImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, lol];

export const Login = () => {
  const navigate = useNavigate();
  const { onLoginChange, email, pw, onLoginSubmit } = useLogin();
  const [pwIcon, setPwIcon] = useState(PwSee);

  const onPwSee = () => {
    const pw = document.getElementById("input-pw") as HTMLInputElement;
    if (pw.type === "password") {
      pw.type = "text";
      setPwIcon(PwOff);
    } else {
      pw.type = "password";
      setPwIcon(PwSee);
    }
  };

  const randomIndex = Math.floor(Math.random() * profileImages.length);
  const randomValue = Math.floor(Math.random() * 100);
  const threshold = 1;
  const selectedProfileImage = randomValue < threshold ? lol : profileImages[randomIndex];

  return (
    <div>
      <Wrapper>
        <S.Flex>
          <S.Form onSubmit={onLoginSubmit}>
            <S.LoginText>Login</S.LoginText>
            <img src={selectedProfileImage} alt="Profile" style={{ width: "250px" }} />
            <S.Input
              id="input-id"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onLoginChange}
            ></S.Input>
            <S.InputLabel>
              <S.Input
                id="input-pw"
                type="password"
                placeholder="Password"
                name="password"
                value={pw}
                onChange={onLoginChange}
              ></S.Input>
              <S.InputButton src={pwIcon} onClick={onPwSee}></S.InputButton>
            </S.InputLabel>

            <S.Button type="submit">로그인</S.Button>
            <S.SigninLinkText>
              아직 회원이 아니신가요?&nbsp;
              <S.SigninLink onClick={() => navigate("/signin")}>회원가입</S.SigninLink>
            </S.SigninLinkText>
          </S.Form>
        </S.Flex>
      </Wrapper>
    </div>
  );
};
