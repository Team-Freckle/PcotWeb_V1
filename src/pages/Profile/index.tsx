import React from "react";
// import { useNavigate } from "react-router-dom";
import { ReactComponent as Reservation } from "../../assets/Login-Logo.svg";
import { ReactComponent as Profilechange } from "../../assets/dummy_profilechange_icon.svg";

// import styles from '../../style/profile-style.module.css';
import * as S from "./style";
import "../../styles/styles.css";

const Profile = () => {
  // const navigate = useNavigate();
  // const LoginHandel = () => {
  //     navigate("/profile");
  // }
  return (
    <>
      <S.Flex>
        <S.Form>
          <S.Text>Profile</S.Text>
          <S.ImgBox>
            <Reservation className={"profileLogoImg"} />
            <Profilechange className={"profileChangeButton"} />
          </S.ImgBox>
          <S.ProfileId>
            dummy_id
            <br />
            <S.ProfileEmail>dummy_email@gmail.com</S.ProfileEmail>
          </S.ProfileId>
          <S.SaveLoginButton>저장하고 로그인하기</S.SaveLoginButton>
          <S.LaterButton>나중에 할게요</S.LaterButton>
        </S.Form>
      </S.Flex>
    </>
  );
};

export default Profile;