import styled, { css } from "styled-components";

export const Nav = styled.nav`
  position: relative;
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  color: #000000;
  font-size: 1.1rem;
  transition: all 0.3s ease;
`;

export const Slider = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  bottom: 0;
  border-radius: 10px;
  background: #e4ecff;
  transition: all 0.3s ease;
`;

export const InputRadio = styled.input`
  display: none;
`;

const customRadioStyles = css`
  #tab1:checked ~ ${Nav} ${Slider} {
    left: 0%;
  }

  #tab2:checked ~ ${Nav} ${Slider} {
    left: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-radius: 0.5rem;
  ${customRadioStyles}
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
