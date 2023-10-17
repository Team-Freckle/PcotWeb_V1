import styled from "styled-components";

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
`;

export const GraphBox = styled.div`
  margin-left: 70px;
  margin-top: 30px;
`;

export const SelectNode = styled.select`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 15px;
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
`;

export const ModalText = styled.div`
  width: 400px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-top: 20px;
  margin-left: 35px;
`;

export const ModalInput = styled.input`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: #e9e9e7;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 20px;
`;

export const ModalButton = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  background: #316ae2;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-size: 20px;
  line-height: 135.5%;
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
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

// const customModalStyles: ReactModal.Styles = {
//   overlay: {
//     backgroundColor: " rgba(0, 0, 0, 0.4)",
//     width: "100%",
//     height: "100vh",
//     zIndex: 10,
//     position: "fixed",
//     top: 0,
//     left: 0,
//   },
//   content: {
//     width: "360px",
//     height: "180px",
//     zIndex: 150,
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "10px",
//     boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
//     backgroundColor: "white",
//     justifyContent: "center",
//     overflow: "auto",
//   },
// };
