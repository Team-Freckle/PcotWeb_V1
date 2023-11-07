import React from "react";

import * as S from "./style";

export const Radio = (props: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <S.Wrapper>
        <S.InputRadio
          type="radio"
          name="slider"
          defaultChecked
          id="tab1"
          value={props.tab1}
          onChange={handleChange}
        />
        <S.InputRadio
          type="radio"
          name="slider"
          id="tab2"
          value={props.tab2}
          onChange={handleChange}
        />
        <S.Nav>
          <S.Label htmlFor="tab1" className="tab1">
            {props.tab1}
          </S.Label>
          <S.Label htmlFor="tab2" className="tab2">
            {props.tab2}
          </S.Label>
          <S.Slider />
        </S.Nav>
      </S.Wrapper>
    </div>
  );
};
