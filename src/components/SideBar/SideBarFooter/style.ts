import styled from "styled-components";

export const FooterItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "icon text arrow";
  align-items: center;
`;

export const FooterIcon = styled.img`
  width: 80px;
  grid-area: icon;
  border-radius: 50%;
`;

export const FooterText = styled.div`
  grid-area: text;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #7a7a7a;
  text-align: left;
`;

export const FooterTextBold = styled.div`
  grid-area: text;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
  text-align: left;
`;

export const FooterArrow = styled.img`
  grid-area: arrow;
  text-align: right;
`;
