import { PopupModal } from "@components/Modal";
import React from "react";

import changeBtn from "@assets/changeBtn.png";
import X from "@assets/X.png";

import * as S from "./style";

export const PsdLocationComparisonModal = () => {
  return (
    <div>
      <PopupModal>
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
        <S.BottomLayouts>
          <S.BottomLayout1>
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
          </S.BottomLayout1>
          <S.BottomLayout2>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
            <S.BottomItem>line2</S.BottomItem>
          </S.BottomLayout2>
        </S.BottomLayouts>
      </PopupModal>
    </div>
  );
};
