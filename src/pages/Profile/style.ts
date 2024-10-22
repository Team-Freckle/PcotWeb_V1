import styled from "styled-components";

export const FloatBox = styled.div`
  float: left;
`;

export const Hambuger = styled.img`
  position: absolute;
  top: 1%;
  left: 2%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 270px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e9e9e7;

  font-family: "pretendard";
  font-weight: 600;
`;

export const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BioInput = styled.textarea`
  width: 270px;
  height: 113px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  resize: none;
  background-color: #e9e9e7;

  font-family: "pretendard";
  font-weight: 600;
`;

export const BioBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;
  flex-direction: column;
`;

export const InputText = styled.div`
  position: absolute;
  left: 10px;
`;

export const SubmitBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  background-color: #316ae2;
  color: white;
  font-family: "pretendard";
  font-weight: 600;
  margin-left: 450px;
  cursor: pointer;
  @media screen {
    @media (max-width: 599px) {
      float: none;
      margin-right: 0px;
      margin-left: 0px;
      width: 290px;
    }
  }
  :active {
    background-color: #252525;
  }
`;

export const LogoutBtn = styled.button`
  width: 290px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 5px;
  background-color: #ff2c2c;
  color: white;
  font-family: "pretendard";
  font-weight: 600;
  cursor: pointer;

  @media screen {
    @media (min-width: 599px) {
      display: none;
    }
  }
  :active {
    background-color: #252525;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 70px;
`;

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

export const LogoutText = styled.div`
  position: absolute;
  top: 97%; /* 상단에서 중앙으로 이동 */
  left: 50%; /* 좌측에서 중앙으로 이동 */
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  color: #7a7a7a;
  font-family: "pretendard";
  font-weight: 600;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  @media screen {
    @media (max-width: 599px) {
      display: none;
    }
  }
`;
