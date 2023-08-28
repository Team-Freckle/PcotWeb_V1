import styled from "styled-components";

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
`;

export const InputText = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
`;
