import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const Title = styled.span`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 30px;
  margin-left: 100px;
`;

export const WorkspaceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
`;

export const WorkspaceItem = styled.div`
  width: 200px;
  height: 270px;
  margin: 10px;
`;

export const WorkspaceImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #d9d9d9;
  border: none;
`;

export const WorkspaceName = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  margin-left: 10px;
`;

export const WorkspaceSubName = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #7a7a7a;
  margin-top: 5px;
  margin-left: 10px;
`;
