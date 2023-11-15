import React from "react";

import * as S from "./style";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationManupulate = () => {
  return (
    <S.Container>
      <S.Title>
        <S.TitleText>Manipulate</S.TitleText>
      </S.Title>
      <S.EditArea>
        <S.Edit>Invite people</S.Edit>
        <S.Edit>Change Profile Image</S.Edit>
        <S.EditWarning>Change Exposure</S.EditWarning>
        <S.EditWarning>Delete</S.EditWarning>
      </S.EditArea>
    </S.Container>
  );
};
