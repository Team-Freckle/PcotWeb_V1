import styled from "styled-components";

export const MainCotainer = styled.form`
  background: #ffffff;

  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;

  user-select: none;

  float: left;
  position: fixed;
  z-index: 1;
`;

export const Flex = styled.form`
  display: flex;
  justify-content: space-between;
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

  width: 100%;

  margin-top: 15%;
  font-size: 110%;
`;

export const MemberImage = styled.form`
  display: flex;
  flex-basis: 45px;

  width: 100%;

  grid-gap: 10px;
  grid-template-columns: repeat(10, 1fr);

  flex-wrap: wrap;
  /* grid-template-columns: ; */
`;

export const WorkButton = styled.form`
  background-color: gray;
  height: 3%;

  /* align-items: center;
  align-content: center;
  justify-content: center; */
  text-align: center;
  justify-items: center;
`;

// export const WorkChangeBtn = styled.button`
//   width: 100%;
//   border: 0;
// `;

export const HideCheck = styled.form`
  display: none;
`;

export const SideColor = styled.form`
  background-color: #ffffff;
`;

export const CustomWidth = styled.form`
  width: 500px;
`;
