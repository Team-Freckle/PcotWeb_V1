import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Span = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 750;
  font-size: 46px;
  line-height: 135.5%;
  color: black;
  margin-bottom: 50px;
  word-break: keep-all;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const Button = styled.button`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 135.5%;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  cursor: pointer;
  :active {
    background: #585858;
    color: white;
  }
`;
