import React from "react";
import * as S from "./style";
import useEmailVerify from "@hooks/useEmailVerify";
import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "@components/Wrapper";

export const EmailVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onEmailCodeSend = () => {
    try {
      if (location.state && location.state.Email) {
        useEmailVerify(location.state.Email);
      } else {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    }
  };

  const onGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Wrapper>
        <S.Flex>
          <S.Span>이메일 확인을 위한 메일이 발송되었습니다</S.Span>
          <S.Span>이메일을 확인해주세요</S.Span>
          <S.ButtonDiv>
            <S.Button style={{ background: "#316ae2" }} onClick={onEmailCodeSend}>
              이메일 재전송
            </S.Button>
            <S.Button style={{ background: "#525252" }} onClick={onGoToLogin}>
              로그인
            </S.Button>
          </S.ButtonDiv>
        </S.Flex>
      </Wrapper>
    </div>
  );
};
