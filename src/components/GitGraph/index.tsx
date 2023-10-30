import React, { useState } from "react";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";
// import Modal from "react-modal";

import * as S from "./style";
import Plus from "@assets/plus.svg";
import Tree from "@assets/modal_img.png";

export const GitGraph = () => {
  const [mkNode, setMkNode] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timer, setTimer] = useState("00:00:00");

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
    console.log(mkNode);
    if (mkNode == 1) {
      main.commit("ddddd");
      setMkNode(0);
      console.log(mkNode);
    }
  };

  // const node = () => {
  //   if (mkNode == 1) {
  //     console.log("gooooooooood");
  //     setMkNode(0);
  //     main.commit("ddddd");
  //   }
  // };

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <S.Container>
      <S.ContributesText>Node Graph</S.ContributesText>
      <S.Button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img src={Plus} alt="Plus" />
      </S.Button>

      <S.ModalContainer isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <img src={Tree} alt="Tree" />
        <S.ModalTime> {timer} </S.ModalTime>

        <S.ModalText>Node Name</S.ModalText>
        <S.ModalInput />

        <S.ModalText>Select Node</S.ModalText>
        <S.SelectNode>
          <S.OptionNode disabled selected>
            노드선택하기
          </S.OptionNode>
          <S.OptionNode>Main</S.OptionNode>
          <S.OptionNode>B</S.OptionNode>
          <S.OptionNode>C</S.OptionNode>
          <S.OptionNode>D</S.OptionNode>
        </S.SelectNode>
        <div>
          <S.ModalButton
            onClick={() => {
              setModalIsOpen(false);
              // node();
              setMkNode(1);
              console.log(mkNode);
            }}
          >
            Make node
          </S.ModalButton>
        </div>
      </S.ModalContainer>

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
