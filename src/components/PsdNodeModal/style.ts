import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 50%;
  flex: 1;
  padding: 20px;
`;

export const imgBox = styled.div`
  position: relative;
`;

export const compareButton = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #316ae2;
  color: white;

  right: 25px;
  bottom: 25px;
  cursor: pointer;
  margin-top: 10px;
`;

export const nodeName = styled.div`
  width: 100% - 10px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
  text-align: left;
`;

export const nodeInfo = styled.div`
  width: 100% - 10px;
  height: 150px;
  font-size: 15px;
  text-align: left;
  padding-left: 10px;
  word-break: keep-all;
`;

export const Texts = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const userEmail = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  flex: 1;
`;

export const Img = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 300px;
  object-fit: contain;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const RightTextBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  flex: 1;
`;

export const RightText = styled.div`
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Layers = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const Layer = styled.div`
  display: flex;
  width: 80%;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e9e9e7;
`;

export const LayerImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const LayerName = styled.div`
  margin: auto 0;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
