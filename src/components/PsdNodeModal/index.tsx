import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PopupModal } from "@components/Modal";
import * as S from "./style";
import { usePsd } from "@hooks/usePsd";
import { useParams } from "react-router-dom";
import { PsdComparisonModal } from "@components/PsdComparisonModal";

export const API_URL = process.env.REACT_APP_API;

const PsdNodeModal = ({
  active,
  setActive,
  nodeName,
  nodeComment,
}: {
  active: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
  nodeName?: string;
  nodeComment?: string;
}) => {
  const { nodePsdList, psdLayerList } = usePsd();
  const { organization, workspace } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [psdImg, setPsdImg] = useState("");
  const [compareModalVisible, setCompareModalVisible] = useState(false);

  useEffect(() => {
    nodePsdList(organization, workspace, nodeName).then((res) => {
      const psdName = res.data[0].name;
      psdLayerList(organization, workspace, nodeName, psdName).then((res) => {
        console.log(res.data);
        const filteredData = res.data.filter((item: any) => item.folderYn === "N");
        setFilteredData(
          filteredData.map((item: any, index: any) => (
            <S.Layer key={index}>
              <S.LayerImg
                src={`${API_URL}/v2/cloud/pull/image/layer/${organization}/${workspace}/${nodeName}/${psdName}/${item.name}`}
                alt="layer"
              />
              <S.LayerName>{item.name}</S.LayerName>
            </S.Layer>
          )),
        );
        setPsdImg(
          `${API_URL}/v2/cloud/pull/image/preview/${organization}/${workspace}/${nodeName}/${psdName}`,
        );
      });
    });
  }, []);

  const handleCompareClick = () => {
    setCompareModalVisible(true);
  };

  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <S.MainBox>
          <S.LeftBox>
            <S.imgBox>
              <S.Img src={psdImg} alt="PsdImg" />
              <S.compareButton onClick={handleCompareClick}>Compare</S.compareButton>
            </S.imgBox>
            <S.Texts>
              <S.nodeName>{nodeName}</S.nodeName>
              <S.nodeInfo>{nodeComment}</S.nodeInfo>
            </S.Texts>
            <S.userEmail>user</S.userEmail>
          </S.LeftBox>
          <S.RightBox>
            <S.RightTextBox>
              <S.RightText>Layers</S.RightText>
              <S.Layers>{filteredData}</S.Layers>
            </S.RightTextBox>
          </S.RightBox>
        </S.MainBox>
      </PopupModal>
      {compareModalVisible && (
        <PsdComparisonModal closeModal={() => setCompareModalVisible(false)} />
      )}
    </div>
  );
};

export default PsdNodeModal;
