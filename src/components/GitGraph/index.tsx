import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGitgraph } from "@hooks/useGitgraph";

import * as S from "./style";
import PsdNodeModal from "@components/GitGraph/PsdNodeModal";
import Plus from "@assets/plus.svg";
import Tree from "@assets/modal_img.png";

export const GitGraph = () => {
  const { onNodeChange, drawNodeTree } = useGitgraph();
  const { organization, workspace } = useParams();
  const [NodeList, setNodeList] = useState<any>([]);
  const [mkNode, setMkNode] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nodemodalOpen, setNodeModalOpen] = useState(false);
  const [timer, setTimer] = useState("00:00:00");
  const [data, setData] = useState([]);
  function renderTree(node: any) {
    return (
      <S.NodeBox key={node.name}>
        <S.NodeTextName
          onClick={() => {
            console.log(node.name);
            PsdNodeModal;
          }}
        >
          {node.name}
        </S.NodeTextName>
        <S.NodeTextComment onClick={() => console.log(node.comment)}>
          {node.comment}
        </S.NodeTextComment>
        {node.child.map((childNode: any) => renderTree(childNode))}
      </S.NodeBox>
    );
  }

  useEffect(() => {
    drawNodeTree(organization, workspace).then((res) => {
      setData(res.data);

      const rootNode = res.data;
      const tree = renderTree(rootNode);

      setNodeList(tree);
    });
  }, []);

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
      {NodeList}
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
            }}
          >
            Make node
          </S.ModalButton>
        </div>
      </S.ModalContainer>

      <S.NodeContainer>{NodeList ? NodeList : <div>Loading</div>}</S.NodeContainer>
    </S.Container>
  );
};

export default GitGraph;
