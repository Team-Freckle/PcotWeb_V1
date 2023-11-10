import { PopupModal } from "@components/Modal";
import React, { useEffect, useState } from "react";

import changeBtn from "@assets/changeBtn.png";
import X from "@assets/X.png";

import * as S from "./style";
import { useGitgraph } from "@hooks/useGitgraph";
import { useParams } from "react-router-dom";
import { usePsd } from "@hooks/usePsd";
import selectNodeImg from "@assets/selectNodeImg.png";

export const API_URL = process.env.REACT_APP_API;

export const PsdComparisonModal = ({
  closeModal,
  Name,
  psdName,
}: {
  closeModal: () => void;
  Name: any;
  psdName: any;
}) => {
  const { drawNodeTree } = useGitgraph();
  const { psdCompare, nodePsdList } = usePsd();
  const { organization, workspace } = useParams();
  const [names, setNames] = useState<string[]>([]);
  const [selectedNode1, setSelectedNode1] = useState("");
  const [bottomItems, setBottomItems] = useState("");
  const [psdImg, setPsdImg] = useState("");
  const [beforePsdImg, setBeforePsdImg] = useState(selectNodeImg);

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
    setPsdImg(
      `${API_URL}/v2/cloud/pull/image/preview/${organization}/${workspace}/${Name}/${psdName}`,
    );
  }, []);

  const onNodeChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeNumber: number) => {
    const selectedNode = e.target.value;
    if (nodeNumber === 1) {
      setSelectedNode1(selectedNode);
    }
  };

  useEffect(() => {
    console.log(`Node 1: ${selectedNode1}`);
    if (!selectedNode1) return;
    nodePsdList(organization, workspace, selectedNode1).then((res) => {
      setBeforePsdImg(
        `${API_URL}/v2/cloud/pull/image/preview/${organization}/${workspace}/${selectedNode1}/${res.data[0].name}`,
      );
      psdCompare(organization, workspace, selectedNode1, Name, res.data[0].name, psdName).then(
        (res) => {
          console.log(res.data.layer);
          const bottomItems = res.data.layer.map((item: any) => {
            if (item.status === "create") {
              return (
                <S.BottomItemCreate key={item.after.name}>{item.after.name}</S.BottomItemCreate>
              );
            } else if (item.status === "edit") {
              return (
                <S.BottomItemChange key={item.after.name}>{item.after.name}</S.BottomItemChange>
              );
            } else if (item.status === "delete") {
              return (
                <S.BottomItemDelete key={item.before.name}>{item.before.name}</S.BottomItemDelete>
              );
            } else if (item.status === "immutable") {
              return <S.BottomItemNomal key={item.after.name}>{item.after.name}</S.BottomItemNomal>;
            }
          });
          setBottomItems(bottomItems);
        },
      );
    });
  }, [selectedNode1]);

  return (
    <div>
      <PopupModal>
        <div>
          <S.X onClick={closeModal} src={X} alt="testimg" />
          <S.Layout>
            <div>
              <p>
                <select onChange={(e) => onNodeChange(e, 1)} name="ParentName">
                  <option value="">선택</option>
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </p>

              <S.Img src={beforePsdImg} alt="testimg" />
            </div>
            <S.CenterLogo src={changeBtn} alt="textlogo" />
            <div>
              <p>{Name}</p>
              <S.Img src={psdImg} alt="testimg2" />
            </div>
          </S.Layout>
          <S.BottomLayout>
            {bottomItems ? bottomItems : <div>노드를 선택해주세요</div>}
          </S.BottomLayout>
        </div>
      </PopupModal>
    </div>
  );
};
