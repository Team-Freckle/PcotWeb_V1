import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";
import { useGitgraph } from "../../hooks/useGitgraph";

import * as S from "./style";
import PsdNodeModal from "@components/GitGraph/PsdNodeModal";
import Plus from "@assets/plus.svg";
import Tree from "@assets/modal_img.png";

export const GitGraph = (props: any) => {
  const {
    onNodeChange,
    Name,
    Comment,
    ParentName,
    setName,
    setComment,
    setParentName,
    onNodeSubmit,
    drawNodeTree,
  } = useGitgraph();

  const [mkNode, setMkNode] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nodemodalOpen, setNodeModalOpen] = useState(false);
  const [timer, setTimer] = useState("00:00:00");

  const { organization, workspace } = useParams();

  useEffect(() => {
    drawNodeTree(organization, workspace).then((res) => {});
  }, []);

  const withoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  });

  const initGraph = (gitgraph: any) => {
    // const master = gitgraph.branch("master");
    // master.commit({
    //   subject: "Hello",
    //   onClick: () => {
    //     console.log(nodemodalOpen);
    //     setNodeModalOpen((prev) => !prev);
    //     console.log("complete");
    //   },
    // });
    // master.commit({
    //   subject: "World",
    //   onClick: () => {
    //     console.log(nodemodalOpen);
    //     setNodeModalOpen((prev) => !prev);
    //     console.log("complete");
    //   },
    // });
    // const main = gitgraph.branch("main").commit("zero");
    // const graph = gitgraph.branch("graph").commit("first");
    // main.commit("second");
    // main.commit("third");
    // graph.commit("four");
    // console.log(mkNode);
  };

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
      {nodemodalOpen && <PsdNodeModal active={nodemodalOpen} setActive={setNodeModalOpen} />}
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
        <S.ModalName name="name" onChange={onNodeChange} />

        <S.ModalText>Node Comment</S.ModalText>
        <S.ModalComment name="new node" onChange={onNodeChange} />

        <S.ModalText>Select Node</S.ModalText>
        <S.SelectNode>
          <S.OptionNode disabled selected>
            노드선택하기
          </S.OptionNode>
          <S.OptionNode value="Main">Main</S.OptionNode>
          <S.OptionNode value="B">B</S.OptionNode>
          <S.OptionNode value="C">C</S.OptionNode>
          <S.OptionNode value="D">D</S.OptionNode>
        </S.SelectNode>

        <div>
          <S.ModalButton
            onClick={() => {
              setModalIsOpen(false);
              // node();
              setMkNode(1);
              onNodeSubmit();
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
