import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const Title = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title button";
`;

export const TitleText = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  grid-area: title;
  justify-self: start;
  margin-left: 50px;
  margin-top: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const EditArea = styled.div`
  margin-left: 325px;
  margin-right: 75px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "info";
`;

export const Edit = styled.div`
  grid-area: imgname;
  color: black;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  margin-top: 4px;
`;

export const EditWarning = styled.div`
  grid-area: imgname;
  color: red;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  margin-top: 4px;
`;

export const Date = styled.h1`
  font-size: small;
  /* float: right; */
  margin-right: 5px;
  text-align: right;
  color: gray;
`;

export const Flex = styled.div`
  display: flex;
`;
