import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const ContributesText = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 30px;
  margin-left: 70px;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background: #316ae2;
  border-radius: 73px;
  color: #ffffff;
  box-shadow: 2px 2px 15px rgb(0, 0, 0, 0.2);
  position: absolute;
  right: 35px;
  bottom: 35px;
  cursor: pointer;

  :active {
    background: #585858;
    cursor: pointer;
  }

  img {
    width: 40px;
  }
`;

export const GraphBox = styled.div`
  margin-left: 70px;
  margin-top: 30px;
`;

export const ModalContainer = styled(Modal)`
  width: 310px;
  height: 650px;
  margin: 0 auto;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  img {
    width: 200px;
    margin-top: 30px;
    /* align-self: center; */
  }
`;

export const ModalTime = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  color: #acacac;
  margin-top: 10px;
  text-align: center;
`;

export const ModalText = styled.div`
  width: 400px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-top: 15px;
  margin-left: 35px;
`;

export const ModalName = styled.input`
  width: 270px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #e9e9e7;
  margin-top: 5px;
  margin-left: 20px;
`;

export const ModalComment = styled.input`
  width: 270px;
  height: 113px;
  border: none;
  border-radius: 10px;
  background-color: #e9e9e7;
  margin-top: 5px;
  margin-left: 20px;
`;

export const ModalButton = styled.button`
  width: 270px;
  height: 50px;
  border: none;
  background: #316ae2;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-family: Pretendard;
  font-style: normal;
  font-size: 16px;
  line-height: 135.5%;
  text-align: center;
  margin-left: 20px;
  margin-top: 20px;
  /* @media screen and (min-width: 600px) {
    width: 94%;
    height: 73px;
    color: #ffffff;
  } */
  :active {
    background: #585858;
    cursor: pointer;
  }
`;

export const SelectNode = styled.select`
  width: 270px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #e9e9e7;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  /* font-size: inherit;
  line-height: inherit; */
  &:focus {
    background-color: #e4ecff;
  }
`;

export const OptionNode = styled.option`
  width: 400px;
  height: auto;
  /* position: absolute; */
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #ffffff;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
`;

export const NodeContainer = styled.div`
  width: 100%;
  height: 30%;
`;

export const NodeBox = styled.div`
  margin: 0;
  padding-top: 5px;
`;

export const NodeTextName = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-top: 10px;
  margin-left: 35px;
  margin-bottom: 0;
`;

export const NodeTextComment = styled.p`
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
  text-align: left;
  margin-top: 2px;
  margin-left: 35px;
`;
