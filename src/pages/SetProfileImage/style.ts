import styled from "styled-components";

export const FloatBox = styled.div`
  float: left;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Text = styled.div`
  color: var(--316-ae-2, #316ae2);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 3;
  align-self: flex-start;
`;

export const Box = styled.div`
  width: 370px;
  /* height: 550px; */
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 1px 20px 0px rgba(183, 183, 183, 0.2);
  border-radius: 10px;
  @media (max-width: 440px) {
    width: 350px;
  }
`;

export const Inputs = styled.div`
  margin-top: 20px;
`;

export const DefaultButton = styled.button`
  width: 330px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid var(--316-ae-2, #316ae2);
  margin-top: 10px;
  background-color: white;
  color: #316ae2;
  font-family: "pretendard";
  font-weight: 600;
  cursor: pointer;
  :active {
    background-color: #252525;
  }
`;

export const SubmitBtn = styled.button`
  width: 330px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  background-color: #316ae2;
  color: white;
  font-family: "pretendard";
  font-weight: 600;
  cursor: pointer;
  :active {
    background-color: #252525;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

export const TextName = styled.div`
  margin-top: 20px;
  color: black;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextComment = styled.div`
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
