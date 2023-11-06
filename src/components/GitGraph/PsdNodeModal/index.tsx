import { PopupModal } from "@components/Modal";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const { NodePsdInfoGet, LayerPsdInfoGet } = useNodeInfo();
  const { organization, workspace, psdname, psdimg } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    NodePsdInfoGet(organization, workspace, psdname, psdimg).then((res) => {
      setData(res);
      console.log(res.data.name);
      <div>
        <S.Img src="https://via.placeholder.com/300" alt="testimg" />
        <S.ModalTitle>{res.name}</S.ModalTitle>
        <S.ModalInfoText>{res.size}</S.ModalInfoText>
        <S.ModalPsdComment>{res.comment}</S.ModalPsdComment>
        <S.ModalInfoText>{res.uploadUserName}</S.ModalInfoText>
        <S.ModalInfoText>{res.uploadTime}</S.ModalInfoText>
      </div>;
    });
  }, []);

  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <div>
          <S.X src={X} alt="testimg" />
          <S.Layout>
            <div>
              <S.Img src="https://via.placeholder.com/300" alt="testimg" />
              <S.ModalTitle>노드 이름</S.ModalTitle>
              <S.ModalInfoText>808682</S.ModalInfoText>
              <S.ModalPsdComment>
                워크스페이스 코멘트임. 워크스페이스 코멘트 주르르루루루루루루ㅜ루루ㅜㄺ일 예정.
                워크스페이스 코멘트
              </S.ModalPsdComment>
              <S.ModalInfoText>test@test.er</S.ModalInfoText>
              <S.ModalInfoText>2023-11-01 [10:35]</S.ModalInfoText>
            </div>
          </S.Layout>
          <S.LayerLayout>
            <S.ModalTitle>Node Name</S.ModalTitle>
            <S.LayerItem>
              <S.LayerImg src="https://via.placeholder.com/30" alt="testimg" />
              <S.LayerText>layer1</S.LayerText>
            </S.LayerItem>
            <S.LayerItem>
              <S.LayerImg src="https://via.placeholder.com/30" alt="testimg" />
              <S.LayerText>layer2</S.LayerText>
            </S.LayerItem>
            <S.LayerItem>
              <S.LayerImg src="https://via.placeholder.com/30" alt="testimg" />
              <S.LayerText>layer3</S.LayerText>
            </S.LayerItem>
          </S.LayerLayout>
        </div>
      </PopupModal>
    </div>
  );
};

export default PsdNodeModal;
