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
  line-height: 3; /* 54.2px */
`;

export const Box = styled.div`
  width: 370px;
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

export const Input = styled.input`
  width: 270px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e9e9e7;

  font-family: "pretendard";
  font-weight: 600;
`;

export const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
`;

export const InputText = styled.div`
  position: absolute;
  left: 10px;
`;

export const BioInput = styled.textarea`
  width: 270px;
  height: 140px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  resize: none;
  background-color: #e9e9e7;

  font-family: "pretendard";
  font-weight: 600;
  font-size: 0.85rem;
`;

export const BioBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
`;

export const SubmitBtn = styled.button`
  width: 290px;
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

export const RadioButton = styled.div`
  width: 290px;
  height: 50px;
`;
