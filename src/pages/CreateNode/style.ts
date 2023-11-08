import styled from "styled-components";

export const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
  flex-direction: column;
`;

export const PsdBoxs = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
  margin-left: 20px;
  float: left;
`;

export const InputText = styled.div`
  position: absolute;
  left: 10px;
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

export const SelectParent = styled.select`
  width: 270px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  /* padding-left: 10px;
  padding-right: 10px; */
  background-color: #e9e9e7;

  &:focus {
    background-color: #e4ecff;
  }
`;

export const OptionParent = styled.option`
  width: 400px;
  height: auto;
  /* position: absolute; */
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #ffffff;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 70px;
`;

export const CompleteBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  background-color: #316ae2;
  color: white;
  font-family: "pretendard";
  font-weight: 600;
  cursor: pointer;
  @media screen {
    @media (max-width: 599px) {
      float: none;
      margin-right: 0px;
      margin-left: 0px;
      width: 290px;
    }
  }
  :active {
    background-color: #252525;
  }
`;
