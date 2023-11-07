import { PopupModal } from "@components/Modal";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNodeInfo } from "@hooks/useNodeInfo";

import X from "@assets/X.png";

import * as S from "./style";

const PsdNodeModal = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}) => {
  const { PsdImgGet, NodePsdInfoGet, LayerPsdInfoGet } = useNodeInfo();
  const { organization, workspace, psdname, psdimg } = useParams();
  const [data, setData] = useState([]);
  const [renderImg, setRenderImg] = useState<any>([]);
  const [renderNode, setRenderNode] = useState<any>([]);
  const [renderLayer, setRenderLayer] = useState<any>([]);

  useEffect(() => {
    PsdImgGet(organization, workspace, psdname, psdimg).then((res) => {
      setData(res);
      console.log(data);

      const psd = res.data;
      const psdInfo = renderPsdImg(psd);

      setRenderImg(psdInfo);
    });
  });

  useEffect(() => {
    NodePsdInfoGet(organization, workspace, psdname, psdimg).then((res) => {
      setData(res);

      const node = res.data;
      const nodeInfo = renderPsdInfo(node);

      setRenderNode(nodeInfo);
    });
  }, []);

  useEffect(() => {
    LayerPsdInfoGet(organization, workspace, psdname, psdimg).then((res) => {
      setData(res);

      const layer = res.data;
      const layerInfo = renderLayerInfo(layer);

      setRenderLayer(layerInfo);
    });
  }, []);

  const renderPsdImg = (info: any) => {
    console.log(info);
    return (
      <div>
        <S.Img>{info.file}</S.Img>
      </div>
    );
  };

  const renderPsdInfo = (info: any) => {
    console.log(info);
    return (
      <div>
        <S.ModalTitle>{info.name}</S.ModalTitle>
        <S.ModalInfoText>{info.size}</S.ModalInfoText>
        <S.ModalPsdComment>{info.comment}</S.ModalPsdComment>
        <S.ModalInfoText>{info.uploadUserName}</S.ModalInfoText>
        <S.ModalInfoText>{info.uploadTime}</S.ModalInfoText>
      </div>
    );
  };

  const renderLayerInfo = (info: any) => {
    console.log(info);
    return (
      <div>
        <S.ModalInfoText>{info.name}</S.ModalInfoText>
        <S.ModalInfoText>{info.width}</S.ModalInfoText>
        <S.ModalInfoText>{info.height}</S.ModalInfoText>
        <S.ModalInfoText>{info.modeKey}</S.ModalInfoText>
        <S.ModalInfoText>{info.transeparency}</S.ModalInfoText>
        <S.ModalInfoText>{info.clipping}</S.ModalInfoText>
        <S.ModalInfoText>{info.vision}</S.ModalInfoText>
        <S.ModalInfoText>{info.folderYn}</S.ModalInfoText>
      </div>
    );
  };

  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <div>
          <S.X src={X} alt="testimg" />
          <S.Layout>
            {renderImg ? renderImg : <div>Loading</div>}
            {renderNode ? renderNode : <div>Loading</div>}
          </S.Layout>
          <S.LayerLayout>{renderLayer ? renderLayer : <div>Loading</div>}</S.LayerLayout>
        </div>
      </PopupModal>
    </div>
  );
};

export default PsdNodeModal;
