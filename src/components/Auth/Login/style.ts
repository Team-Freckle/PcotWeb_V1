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
    height: 800px;
  }
  @media screen and (max-width: 600px) {
    width: 450px;
    height: 700px;
  }
`;

export const LoginText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 135.5%;
  color: #316ae2;
  @media screen and (min-width: 600px) {
    margin-top: 85px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 0 50px;
  border: none;
  max-width: 3000000px;
  background: #f5f5f5;
  border-radius: 5px;
  margin-top: 20px;
  @media screen and (min-width: 600px) {
    width: 77%;
    height: 73px;
  }
  @media screen and (max-width: 600px) {
    width: 73%;
    height: 50px;
  }
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
    width: 94%;
    height: 73px;
    color: #ffffff;
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
