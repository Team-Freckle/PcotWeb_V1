import { PopupModal } from "@components/Modal";
import React, { useEffect, useState } from "react";

import changeBtn from "@assets/changeBtn.png";
import X from "@assets/X.png";

import * as S from "./style";
import { useGitgraph } from "@hooks/useGitgraph";
import { useParams } from "react-router-dom";

export const PsdComparisonModal = ({ closeModal }: { closeModal: () => void }) => {
  const { drawNodeTree } = useGitgraph();
  const { organization, workspace } = useParams();
  const [names, setNames] = useState<string[]>([]);
  const [selectedNode1, setSelectedNode1] = useState("");
  const [selectedNode2, setSelectedNode2] = useState("");

  useEffect(() => {
    drawNodeTree(organization, workspace).then((res) => {
      const extractNames = (node: any) => {
        if (node && node.name) {
          setNames((prevNames: string[]) => [...prevNames, node.name]);
        }
        if (node.child && node.child.length > 0) {
          node.child.forEach(extractNames);
        }
      };
      extractNames(res.data);
    });
  }, []);

  const onNodeChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeNumber: number) => {
    const selectedNode = e.target.value;
    if (nodeNumber === 1) {
      setSelectedNode1(selectedNode);
    } else if (nodeNumber === 2) {
      setSelectedNode2(selectedNode);
    }
  };

  useEffect(() => {
    console.log(`Node 1: ${selectedNode1}, Node 2: ${selectedNode2}`);
  }, [selectedNode1, selectedNode2]);

  return (
    <div>
      <PopupModal>
        <div>
          <S.X onClick={closeModal} src={X} alt="testimg" />
          <S.Layout>
            <div>
              <select onChange={(e) => onNodeChange(e, 1)} name="ParentName">
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <S.Img src="https://via.placeholder.com/300" alt="testimg" />
            </div>
            <S.CenterLogo src={changeBtn} alt="textlogo" />
            <div>
              <select onChange={(e) => onNodeChange(e, 2)} name="ParentName">
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <S.Img src="https://via.placeholder.com/300" alt="testimg2" />
            </div>
          </S.Layout>
          <S.BottomLayout>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
            <S.BottomItem>line1</S.BottomItem>
          </S.BottomLayout>
        </div>
      </PopupModal>
    </div>
  );
};
