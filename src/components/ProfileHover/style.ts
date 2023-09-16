import styled from "styled-components";

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  position: relative;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  background-color: #e9e9e7;
  border-radius: 50%;
`;

export const ProfileBg = styled.img`
  position: absolute;
  top: 49.3%; /* 상단에서 중앙으로 이동 */
  left: 50%; /* 좌측에서 중앙으로 이동 */
  transform: translate(-50%, -50%); /* 중앙 정렬 */
`;
