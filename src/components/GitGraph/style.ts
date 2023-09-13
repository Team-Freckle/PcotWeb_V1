import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const ContributesText = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 30px;
  margin-left: 70px;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background: #316ae2;
  border-radius: 73px;
  color: #ffffff;
  box-shadow: 2px 2px 15px rgb(0, 0, 0, 0.2);
  position: absolute;
  right: 35px;
  bottom: 35px;
  cursor: pointer;
  :active {
    background: #585858;
    cursor: pointer;
  }
`;

export const GraphBox = styled.div`
  margin-left: 70px;
  margin-top: 30px;
`;
