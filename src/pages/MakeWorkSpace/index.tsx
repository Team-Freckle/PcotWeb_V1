import { ProfileHover } from "@components/ProfileHover";
import React from "react";
import { useCreateWorkSpace } from "@hooks/useCreateWorkSpace";
import { useParams } from "react-router-dom";

import * as S from "./style";
import { Radio } from "@components/Radio";
import Wrapper from "@components/Wrapper";

export const MakeWorkSpace = () => {
  const { name } = useParams();

  const { onWorkSpaceChange, onWorkSpaceSubmit, Name, Comment, setExposure } =
    useCreateWorkSpace(name);

  return (
    <div>
      <Wrapper>
        <h1 style={{ color: "#316AE2" }}>Workspace</h1>

        <form onSubmit={onWorkSpaceSubmit}>
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
                      value={Name}
                      onChange={onWorkSpaceChange}
                      maxLength={10}
                    />
                  </S.InputBox>
                </S.InputBoxs>

                <S.BioBox>
                  <S.InputText style={{ bottom: "140px" }}>Comment</S.InputText>
                  <S.BioInput
                    placeholder="내용을 입력해주세요."
                    id="comment"
                    value={Comment}
                    onChange={onWorkSpaceChange}
                  />
                </S.BioBox>
                <Radio tab1="public" tab2="private" id="radio" onChange={setExposure} />
                <S.ButtonBox>
                  <S.SubmitBtn type="submit">Make Workspace</S.SubmitBtn>
                </S.ButtonBox>
              </S.Inputs>
            </S.Box>
          </S.Container>
        </form>
      </Wrapper>
    </div>
  );
};
