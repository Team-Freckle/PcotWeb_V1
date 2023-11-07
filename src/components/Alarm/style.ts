import styled from "styled-components";

export const box = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  text-align: left;
`;

export const content = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 10%;
`;

export const title = styled.h1`
  font-size: small;
  color: black;
`;

export const path = styled.h3`
  font-size: small;
  width: 100%;
  color: gray;
`;

export const time = styled.h3`
  font-size: small;
  /* float: right; */
  text-align: right;
  color: gray;
`;

export const AlarmBtn = styled.div`
  border-radius: 50%;
  width: 5%;
  height: 10%;

  background-color: black;
`;
