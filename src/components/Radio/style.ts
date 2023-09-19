import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  width: 30%;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background: rgb(18, 13, 13);
  box-shadow: 1px 2px 3px 4px rgba(62, 72, 75, 0.5);
`;

export const Nav = styled.nav`
  position: relative;
  width: 90%;
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
  color: rgb(68, 193, 255);
  font-size: 1.1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const Slider = styled.div`
  position: absolute;
  height: 100%;
  width: 30%;
  left: 0;
  bottom: 0;
  border-radius: 5px;
  background: #17a2b8;
  transition: all 0.3s ease;
`;

export const InputRadio = styled.input`
  display: none;
`;
