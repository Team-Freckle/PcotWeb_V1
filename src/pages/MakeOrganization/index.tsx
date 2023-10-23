import React from "react";
import { Radio } from "@components/Radio";
import { useCreateOrganization } from "@hooks/useCreateOrganization";

import * as S from "./style";
import Wrapper from "@components/Wrapper";
import { ProfileSideBar } from "@components/SideBar/SideBars/ProfileSideBar";

export const MakeOrganization = () => {
  const { Name, Comment, setExposure, onOrganizationChange, onOrganizationSubmit } =
    useCreateOrganization();

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <Wrapper>
        <S.FloatBox>
          <ProfileSideBar />
        </S.FloatBox>
        <S.Container>
          <S.Box>
            <form onSubmit={onOrganizationSubmit}>
              <S.Text style={{ color: "#316AE2" }}>Make Organization</S.Text>
              <S.Inputs>
                <S.InputBoxs>
                  <S.InputBox>
                    <S.InputText style={{ bottom: "70px" }}>Name</S.InputText>
                    <S.Input
                      type="text"
                      placeholder="내용을 입력해주세요."
                      id="name"
                      value={Name}
                      onChange={onOrganizationChange}
                      maxLength={10}
                    />
                  </S.InputBox>
                </S.InputBoxs>

                <S.BioBox>
                  <S.InputText style={{ bottom: "170px" }}>Comment</S.InputText>
                  <S.BioInput
                    placeholder="내용을 입력해주세요."
                    id="comment"
                    value={Comment}
                    onChange={onOrganizationChange}
                  />
                </S.BioBox>
                <Radio tab1="public" tab2="private" id="radio" onChange={setExposure} />
                <S.ButtonBox>
                  <S.SubmitBtn type="submit">Make Organization</S.SubmitBtn>
                </S.ButtonBox>
              </S.Inputs>
            </form>
          </S.Box>
        </S.Container>
      </Wrapper>
    </div>
  );
};
