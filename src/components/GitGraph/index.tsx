import React, { useState } from "react";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";
import Modal from "react-modal";

// import { Popup } from "./Modal/index.tsx";
import * as S from "./style";
import Serch from "@assets/plus.svg";

export const GitGraph = () => {
  const [mkNode, setMkNode] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // console.log(mkNode);

  const withoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  });

  const initGraph = (gitgraph: any) => {
    const main = gitgraph.branch("main").commit("zero");
    main.commit("업데이트1");
  };

  // const node = () => {
  //   if (mkNode == 1) {
  //     console.log("gooooooooood");
  //     setMkNode(0);
  //   }
  // };

  return (
    <S.Container>
      <S.ContributesText>Node Graph</S.ContributesText>
      <S.Button
        onClick={() => {
          setModalIsOpen(true);
          // node();
          // setMkNode(1);
        }}
      >
        <img src={Serch} alt="Search" />
      </S.Button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <S.ModalText>Node Name</S.ModalText>
        <S.ModalInput />

        <S.ModalText>Select Node</S.ModalText>
        {/* <S.ModalInput /> */}
        <S.SelectNode>
          <S.OptionNode disabled selected>
            노드선택하기
          </S.OptionNode>
          <S.OptionNode>A</S.OptionNode>
          <S.OptionNode>B</S.OptionNode>
          <S.OptionNode>C</S.OptionNode>
          <S.OptionNode>D</S.OptionNode>
          {/* <option disabled selected>
            노드 선택하기
          </option>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="grape">grape</option>
          <option value="melon">melon</option> */}
        </S.SelectNode>
        <S.ModalButton>Make node</S.ModalButton>
      </Modal>

      <S.GraphBox>
        <Gitgraph options={{ template: withoutAuthor, orientation: Orientation.VerticalReverse }}>
          {(gitgraph) => {
            initGraph(gitgraph);
          }}
          {/* {initGraph.bind(this)} */}
        </Gitgraph>
      </S.GraphBox>
    </S.Container>
  );
};

export default GitGraph;
