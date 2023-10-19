import React, { useEffect, useState } from "react";
import { ProfileHover } from "@components/ProfileHover";
import { Radio } from "@components/Radio";
import { useCreateOrganization } from "@hooks/useCreateOrganization";

import * as S from "./style";
import ProfileImg from "@assets/Login-Logo.svg";

export const MakeOrganization = () => {
  const { Name, Comment, setExposure, onOrganizationChange, onOrganizationSubmit } =
    useCreateOrganization();
  const [PImg, setPImg] = useState<any>(ProfileImg);

  const Change = (Img: any) => {
    setPImg(Img);
  };

  useEffect(() => {
    console.log("test");
  }, [PImg]);

  return (
    <div>
      <h1 style={{ color: "#316AE2" }}>Organization</h1>

      <form onSubmit={onOrganizationSubmit}>
        <div onChange={onOrganizationChange}>
          <ProfileHover name="OrganizationImg" value={PImg} id="profileImg" Change={Change} />
        </div>

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
                    onChange={onOrganizationChange}
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
                  onChange={onOrganizationChange}
                />
              </S.BioBox>
              <Radio tab1="public" tab2="private" id="radio" onChange={setExposure} />
              <S.ButtonBox>
                <S.SubmitBtn type="submit">Make Organization</S.SubmitBtn>
              </S.ButtonBox>
            </S.Inputs>
          </S.Box>
        </S.Container>
      </form>
    </div>
  );
};
