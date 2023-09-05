import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header . serch"
    "banner banner banner"
    "main main main";
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "serch"
      "banner"
      "main";
  }
`;

export const ProfileBox = styled.div`
  grid-area: header;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 150px;
  float: left;
  margin-left: 20px;
`;

export const NameText = styled.div`
  width: 400px;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 50px;
`;

export const LinkText = styled.div`
  width: 400px;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const SerchInput = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  box-shadow: 1px 1px 20px 0px rgba(183, 183, 183, 0.387);
  float: right;
`;

export const InputLabel = styled.label`
  display: block;
  position: relative;
`;

export const InputBox = styled.div`
  grid-area: serch;
  margin-top: 50px;
  width: 400px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputButton = styled.img`
  position: absolute;
  top: 8px;
  right: 20px;
`;

export const Banner = styled.img`
  grid-area: banner;
  width: 100%;
  height: 200px;
`;

export const Main = styled.div`
  grid-area: main;
  margin-top: 30px;
`;
