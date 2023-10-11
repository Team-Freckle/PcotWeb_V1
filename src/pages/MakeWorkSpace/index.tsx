import React from "react";

import * as S from "./style";

export const MakeWorkSpace = () => {
  return (
    <div>
      <h1 style={{ color: "#316AE2" }}>Organization</h1>

      {/* <form onSubmit={onOrganizationSubmit}>
        <ProfileHover
          name="OrganizationImg"
          value="https://avatars.githubusercontent.com/u/76847245?v=4"
        /> */}

      <S.Container>
        <S.Box>
          <S.Inputs>
            <S.InputBoxs>
              <S.InputBox>
                <S.InputText style={{ bottom: "60px" }}>Name</S.InputText>
                <S.Input
                  type="text"
                  placeholder="내용을 입력해주세요."
                  id="name"
                  // value={Name}
                  // onChange={onOrganizationChange}
                  maxLength={10}
                />
              </S.InputBox>
            </S.InputBoxs>

            <S.BioBox>
              <S.InputText style={{ bottom: "140px" }}>Comment</S.InputText>
              <S.BioInput
                placeholder="내용을 입력해주세요."
                id="comment"
                // value={Comment}
                // onChange={onOrganizationChange}
              />
            </S.BioBox>
            {/* <Radio tab1="Public" tab2="Private" id="radio" onChange={setExposure} /> */}
            <S.ButtonBox>
              <S.SubmitBtn type="submit">Make Organization</S.SubmitBtn>
            </S.ButtonBox>
          </S.Inputs>
        </S.Box>
      </S.Container>
      {/* </form> */}
    </div>
  );
};
