import { useGetOrganizationInfo } from "@hooks/useGetOrganizationInfo";
import React, { useEffect, useState } from "react";

import * as S from "./style";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationManupulate = (props: any) => {
  return (
    <S.Container>
      <S.Title>
        <S.TitleText>Manipulate</S.TitleText>
      </S.Title>
    </S.Container>
  );
};
