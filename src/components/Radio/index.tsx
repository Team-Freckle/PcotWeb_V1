import React from "react";

import * as S from "./style";

export const Radio = () => {
  return (
    <div>
      <S.Wrapper>
        <S.InputRadio type="radio" name="slider" defaultChecked id="tab1" />
        <S.InputRadio type="radio" name="slider" id="tab2" />
        <S.Nav>
          <S.Label htmlFor="tab1" className="tab1">
            Public
          </S.Label>
          <S.Label htmlFor="tab2" className="tab2">
            Private
          </S.Label>
          <S.Slider />
        </S.Nav>
      </S.Wrapper>
    </div>
  );
};
