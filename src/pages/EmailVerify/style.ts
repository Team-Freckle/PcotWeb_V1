import styled from "styled-components";

export const Body = styled.body`
  font-family: "Lato", sans-serif;
  font-size: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const SideBar = styled.div`
  width: 250px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  z-index: 1;
  position: relative;
`;

export const Input = styled.input`
  width: 3rem !important;
  height: 3rem;
  margin: 0 1rem;
  font-size: 2rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContainerMobile = styled(Container)`
  @media only screen and (max-width: 678px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const SideBarMobile = styled(SideBar)`
  @media only screen and (max-width: 678px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SegmentHeader = styled.div`
  text-align: center;

  &.side-bar__segment--header:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const SegmentBottom = styled.div`
  font-weight: bold;
  position: absolute;
  bottom: 2rem;

  @media only screen and (max-width: 678px) {
    position: static !important;
    margin: 10px;
  }
`;

export const Label = styled.label`
  display: block;
  float: left;
  width: 120px;
`;

export const Card = styled.div`
  min-width: 360px;
  padding: 2rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 4px;
  background: white;

  @media only screen and (max-width: 678px) {
    width: 100%;
    min-width: 120px !important;
    margin: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select = styled.select`
  border-radius: 4px;
  display: block;
  border: 1px solid lightgrey;
  margin-top: 0.5rem;
  height: 1.5rem;
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  background-color: #3273dc;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
  }
`;

export const MarginTopSmall = styled.div`
  margin-top: 1rem;
  margin-bottom: -1rem;

  > div {
    flex-wrap: wrap;
  }

  > div > div {
    margin-bottom: 1rem;
  }
`;

export const MarginTopMedium = styled.div`
  margin-top: 1.5rem;
`;

export const MarginTopLarge = styled.div`
  margin-top: 4rem;
`;

export const Error = styled.div`
  border: 1px solid red !important;
`;
