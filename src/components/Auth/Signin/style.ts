import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  margin: auto;
  background: #ffffff;
  box-shadow: 1px 1px 20px rgba(183, 183, 183, 0.2);
  border-radius: 10px;
  @media screen and (min-width: 600px) {
    width: 550px;
    height: 850px;
  }
  @media screen and (max-width: 600px) {
    width: 450px;
    height: 700px;
  }
`;

export const SigninText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 135.5%;
  color: #316ae2;
  @media screen and (min-width: 600px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const Inputs = styled.div`
  @media screen and (min-width: 600px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  position: relative;
  font-size: 24px;
  padding: 0 63px;
  border: none;
  width: 68%;
  max-width: 3000000px;
  height: 73px;
  background-color: #e9e9e7;
  border-radius: 5px;
  margin-top: 20px;
  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135.5%;
    text-align: center;
    color: #7a7a7a;
  }
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const InputButton = styled.img`
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 5px;
  right: 15px;
  margin: auto 0;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  @media screen and (min-width: 600px) {
    width: 5%;
    height: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 5%;
    height: 30px;
  }
  :active {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  background: #316ae2;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 135.5%;
  text-align: center;
  @media screen and (min-width: 600px) {
    margin-top: 70px;
    width: 90%;
    height: 73px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 95%;
    height: 78px;
  }
  :active {
    background: #585858;
    cursor: pointer;
  }
`;

export const SigninLinkText = styled.div`
  margin-top: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135.5%;
  color: #7a7a7a;
`;

export const SigninLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: #316ae2;
`;
