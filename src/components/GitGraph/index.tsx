import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";
import { useGitgraph } from "../../hooks/useGitgraph";
// import { storiesOf } from "@storybook/react";

import * as S from "./style";
import { PsdNodeModal } from "@components/GitGraph/PsdNodeModal";
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
  } = useGitgraph();

  const navigate = useNavigate();
  const [mkNode, setMkNode] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timer, setTimer] = useState("00:00:00");

  // const nodeClick = storiesOf("gitgraph-react/3. Events", module).add("on commit dot click", () => {
  //   return React.createElement(
  //     Gitgraph,
  //     { options: { generateCommitHash: createFixedHashGenerator() } },
  //     function (gitgraph) {
  //       const onClick = action("click on dot");
  //       const master = gitgraph.branch("master");
  //       master.commit({
  //         subject: "Hello",
  //         onClick: onClick,
  //       });
  //       master.commit({
  //         subject: "World",
  //         onClick: onClick,
  //       });
  //     },
  //   );
  // });

  const withoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  });

  const initGraph = (gitgraph: any) => {
    const master = gitgraph.branch("master");
    master.commit({
      subject: "Hello",
      onClick: () => {
        navigate("/PsdNodeModal");
      },
    });
    master.commit({
      subject: "World",
      onClick: () => {
        // <PsdNodeModal />;
        navigate("/PsdNodeModal");
      },
    });

    const main = gitgraph.branch("main").commit("zero");
    const graph = gitgraph.branch("graph").commit("first");
    main.commit("second");
    main.commit("third");
    graph.commit("four");
    console.log(mkNode);
    if (mkNode == 1) {
      main.commit("ddddd");
      setMkNode(0);
      console.log(mkNode);
    }
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
