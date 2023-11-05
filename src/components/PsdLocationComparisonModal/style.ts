import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
`;

export const BottomLayouts = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
`;

export const BottomLayout1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  word-break: break-all;
  width: 100%;
  border-right: 1px solid #e0e0e0;
`;

export const BottomLayout2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  word-break: break-all;
  width: 100%;
  border-left: 1px solid #e0e0e0;
`;

export const Img = styled.img`
  width: 80%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
`;

export const CenterLogo = styled.img`
  width: 50px;
  height: 50px;
  /* border-radius: 10px; */
  margin-top: auto;
  margin-bottom: 5px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

export const BottomItem = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f1f8ff;
`;

export const X = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
