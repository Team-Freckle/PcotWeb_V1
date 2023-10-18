import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const Title = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title button";
`;

export const TitleText = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  grid-area: title;
  justify-self: start;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleButton = styled.div`
  color: #316ae2;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  grid-area: button;
  justify-self: end;
  cursor: pointer;
  margin-right: 50px;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const WorkspaceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: flex-start;
`;

export const WorkspaceItem = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-areas: "img imgname";
  min-width: 290px;
  width: 30%;
  height: 130px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  flex: 1 1 40%;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const WorkspaceImg = styled.img`
  grid-area: img;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #d9d9d9;
  border: none;
  justify-self: center;
  align-self: center;
`;

export const WorkspaceName = styled.div`
  grid-area: imgname;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
  margin-left: 20px;
  align-self: center;
`;

export const WorkspaceSubName = styled.div`
  grid-area: imgname;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  margin-left: 20px;
  margin-top: 20px;
`;
