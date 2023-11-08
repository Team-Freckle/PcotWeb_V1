import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  padding: 20px;
`;

export const TextBox = styled.div`
  width: 250px;
`;

export const img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

export const TitleBox = styled.div`
  width: 100%;
  margin-top: 10px;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DescriptionBox = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const pageName = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  margin-top: 50px;
  margin-left: 100px;
`;

export const createOrganization = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  color: blue;
  margin-top: 50px;
  margin-right: 100px;
  cursor: pointer;
`;
