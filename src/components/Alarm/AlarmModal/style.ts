import styled from "styled-components";

export const modalType = styled.h2`
  font-size: 30px;
  width: 100%;
  height: 10%;

  color: black;
  text-align: center;
`;

export const box = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 95%;
  height: 10%;
  border-radius: 10px;

  overflow-y: scroll;
  text-align: left;

  border: 1px solid blue;
  cursor: pointer;
`;

export const grayFilter = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 95%;
  height: 10%;
  border-radius: 10px;

  overflow-y: scroll;
  text-align: left;

  border: 1px solid blue;
  cursor: pointer;

  background-color: rgb(230, 230, 230);
`;

export const content = styled.div`
  width: 97%;
  height: 10%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  margin-left: 1.5%;
  margin-right: 1.5%;
`;

export const title = styled.h1`
  margin: auto;
  font-size: 25px;
  color: black;
`;

export const path = styled.h3`
  font-size: small;
  width: 50%;
  color: gray;
`;

export const time = styled.h3`
  font-size: small;
  /* float: right; */
  margin-right: 5px;
  text-align: right;
  color: gray;
`;
