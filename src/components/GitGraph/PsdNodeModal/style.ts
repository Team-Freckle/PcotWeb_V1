import styled from "styled-components";

export const X = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  float: left;
`;

export const Img = styled.img`
  display: flex;
  align-items: flex-start;
  margin-left: 20px;
  width: 64%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 10px;
`;

export const ModalPsdComment = styled.div`
  width: 300px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-top: 7px;
  margin-left: 35px;
`;

export const ModalTitle = styled.div`
  width: 400px;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-top: 15px;
  margin-left: 35px;
`;

export const LayerLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  /* word-break: break-all; */
  float: left;
`;

export const LayerItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  width: 360px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #e9e9e7;
  border-radius: 10px;

  cursor: pointer;
`;

export const LayerImg = styled.img`
  /* display: flex;
  align-items: flex-start; */
  margin-left: 8px;
  margin-top: 5px;
  padding: 0;
  width: 40px;
  border-radius: 5px;
`;

export const LayerText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-left: 10px;
`;
