import styled from "styled-components";

export const Canvas = styled.div`
  color: #ffffff;
  position: absolute;
  width: 90%;
  height: 350px;

  background: #316ae2;
  border-radius: 10px;
`;

export const Text = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 54px;
`;

export const Uploadlabel = styled.label`
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;

  ::file-selector-button {
    display: none;
  }
`;
