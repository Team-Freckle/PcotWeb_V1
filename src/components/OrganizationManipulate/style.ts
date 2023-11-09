import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InfoArea = styled.div`
  margin-left: 325px;
  margin-right: 75px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "info";
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

export const OrganizationName = styled.div`
  grid-area: imgname;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  align-self: center;
  margin-right: 10px;
`;

export const Comment = styled.div`
  grid-area: imgname;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  margin-top: 2px;
`;

export const Info = styled.div`
  grid-area: imgname;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  margin-top: 2px;
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
