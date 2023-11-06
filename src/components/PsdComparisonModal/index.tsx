import { PopupModal } from "@components/Modal";
import React from "react";

import changeBtn from "@assets/changeBtn.png";
import X from "@assets/X.png";

import * as S from "./style";

export const PsdComparisonModal = () => {
  return (
    <div>
      <PopupModal>
        <div>
          <S.X src={X} alt="testimg" />
          <S.Layout>
            <div>
              <p>asxdasd</p>
              <S.Img src="https://via.placeholder.com/300" alt="testimg" />
            </div>
            <S.CenterLogo src={changeBtn} alt="textlogo" />
            <div>
              <p>asxdas</p>
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
