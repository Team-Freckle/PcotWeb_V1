import { PopupModal } from "@components/Modal";
import React, { Dispatch, SetStateAction } from "react";

import X from "@assets/X.png";

import * as S from "./style";

const PsdNodeModal = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <div>
          <S.X src={X} alt="testimg" />
          <S.Layout>
            <div>
              <S.Img src="https://via.placeholder.com/300" alt="testimg" />
              <S.ModalTitle>노드 이름</S.ModalTitle>
              <S.ModalPsdComment>
                워크스페이스 코멘트임. 워크스페이스 코멘트 주르르루루루루루루ㅜ루루ㅜㄺ일 예정.
                워크스페이스 코멘트
              </S.ModalPsdComment>
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
