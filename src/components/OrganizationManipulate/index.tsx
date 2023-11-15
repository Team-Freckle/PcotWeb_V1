import { useGetOrganizationInfo } from "@hooks/useGetOrganizationInfo";
import React, { useEffect, useState } from "react";

import * as S from "./style";
import EditOrgProfile from "@components/EditOrgProfile";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationManupulate = (props: any) => {
  return (
    <S.Container>
      <S.Title>
        <S.TitleText>Manipulate</S.TitleText>
      </S.Title>
      <S.EditArea>
        {/* todo 걍 만들어 보아요 */}
        <S.Edit>Invite people 이메일로 초대 만들어야함</S.Edit>
        {/* 올가 프로필 이미지 변경 */}
        <S.Edit>Change Profile Image 이 시끼도 있음</S.Edit>
        {/* <EditOrgProfile organization={name} /> */}
        {/* todo warning 시끼들은 누르면 경고창 한번 띄우기 */}
        <S.EditWarning>Change Exposure 있음</S.EditWarning>
        {/* 올가 삭제 */}
        <S.EditWarning>Delete 경고창 만들기</S.EditWarning>
      </S.EditArea>
    </S.Container>
  );
};
