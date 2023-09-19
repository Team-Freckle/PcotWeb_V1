import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.div`
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 270px;
  height: 40px;
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
  flex-direction: column;
`;

export const InputText = styled.div`
  position: absolute;
  left: 10px;
`;

export const BioInput = styled.textarea`
  width: 270px;
  height: 113px;
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
`;
