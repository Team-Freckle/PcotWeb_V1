import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  background: #ffffff;
  box-shadow: 1px 1px 20px rgba(183, 183, 183, 0.2);
  border-radius: 10px;
  @media screen and (min-width: 600px) {
    margin: auto;
    width: 550px;
    height: 800px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    margin-top: -30%;
    width: 90%;
    height: 80%;
  }
`;

export const Text = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 135.5%;
  color: #316ae2;
  @media screen and (min-width: 600px) {
    margin-top: 45px;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 2%;
    margin-bottom: 40px;
  }
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    margin-top: 10px;
    width: 250px;
    height: 250px;
    background-color: #f2f2f2;
    border-radius: 50%;
  }
  @media screen and (max-width: 600px) {
    width: min-content;
    height: min-content;
    background-color: #f2f2f2;
    border-radius: 50%;
    align-items: center;
  }
`;

export const ProfileId = styled.div`
  margin-bottom: 8px;
  @media screen and (min-width: 600px) {
    margin-top: 20px;
    font-size: 25px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3%;
    font-size: 20px;
  }
`;

export const ProfileEmail = styled.span`
  color: gray;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const SaveLoginButton = styled.button`
  border: none;
  width: 95%;
  background: #316ae2;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  line-height: 135.5%;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  @media screen and (min-width: 600px) {
    margin-top: 90px;
    height: 73px;
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
    height: 60px;
    font-size: 15px;
  }
  :active {
    background: #585858;
    cursor: pointer;
  }
`;

export const LaterButton = styled.button`
  border: 2px solid #316ae2;
  margin-top: 10px;
  width: 95%;
  background: #ffffff;
  color: #316ae2;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  line-height: 135.5%;
  text-align: center;
  @media screen and (min-width: 600px) {
    height: 73px;
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    height: 60px;
    font-size: 15px;
  }
  :active {
    background: #585858;
    cursor: pointer;
  }
`;
