import styled from "styled-components";

export const MainCotainer = styled.form`
  background: #ffffff;

  height: max-content;
  width: 20%;

  display: flex;
  flex-direction: column;

  border-right: 1px solid red;

  float: left;
  position: relative;
  /* @media screen and (min-width: 600px) {
    width: 550px;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  } */
`;

export const Flex = styled.form`
  display: flex;
  justify-content: space-around;
  font-size: 120%;
`;

export const ImgBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 100%;

  font-size: 150%;
  font-weight: 500;
`;

export const Content = styled.form`
  font-size: 70%;
  text-decoration-color: #7a7a7a;
  font-weight: 200;

  margin-bottom: 15%;
`;

export const Member = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 15%;
  font-size: 110%;
`;

export const MemberImage = styled.form`
  display: grid;
  flex-basis: 45px;

  width: fit-content;

  grid-gap: 10px;
  grid-template-columns: repeat(10, 1fr);
  /* grid-template-columns: ; */
`;
