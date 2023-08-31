import styled from "styled-components";

export const ProfileBox = styled.div`
  display: grid;
  width: 100vh;
  grid-template-columns: 200px 200px 500px 200px;
`;

export const ProfileImg = styled.img``;

export const NameText = styled.div``;

export const LinkText = styled.div``;

export const SerchInput = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  box-shadow: 1px 1px 20px 0px rgba(183, 183, 183, 0.387);
`;

export const InputLabel = styled.label`
  position: relative;
  width: 300px;
`;

export const InputButton = styled.img`
  position: absolute;
  right: 0;
  top: 8px;
`;
