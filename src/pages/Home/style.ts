import styled from "styled-components";

export const FloatBox = styled.div`
  float: left;
  position: fixed;

  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  margin-left: 13.021vw;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header . serch"
    "banner banner banner"
    "main main main";
  @media (max-width: 1040px) {
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: 50px 1fr;
    grid-template-areas:
      "hambuger serch"
      "banner"
      "main";
  }
`;

export const Hambuger = styled.img`
  grid-area: header;
  width: 50px;
  height: 50px;
  margin-top: 50px;
  margin-left: 20%;
  cursor: pointer;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ProfileBox = styled.div`
  grid-area: header;
  float: right;
  justify-self: end;
  position: fixed;
  background-color: white;
  width: 80%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  float: left;
  margin-left: 20px;
  border-radius: 50%;
  margin-top: 20px;
`;

export const NameText = styled.div`
  width: 600px;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-top: 50px;
`;

export const LinkText = styled.div`
  width: 325px;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const SerchInput = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  padding-right: 50px;
  box-shadow: 1px 1px 20px 0px rgba(183, 183, 183, 0.387);
  float: right;
`;

export const InputLabel = styled.label`
  display: block;
  position: relative;
  @media (max-width: 1200px) {
    width: 75%;
    display: flex;
  }
`;

export const InputBox = styled.div`
  grid-area: serch;
  margin-top: 50px;
  width: 400px;
  height: 100px;
  margin-right: 40px;

  float: right;
  position: fixed;
  justify-self: last baseline;

  @media (max-width: 1200px) {
    width: fit-content;
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const InputButton = styled.img`
  position: absolute;
  top: 8px;
  right: 20px;
`;

export const Banner = styled.img`
  grid-area: banner;
  width: 80%;
  height: auto;
  border-radius: 10px;
  max-height: 250px;
  margin-left: 10%;
  margin-top: 0;
`;

export const Main = styled.div`
  grid-area: main;

  margin-top: 70px;
`;

export const AlamBox = styled.div`
  margin: 0.26vw;
  margin-right: 2.083vw;
`;

export const Overflow = styled.div`
  position: fixed;
`;
