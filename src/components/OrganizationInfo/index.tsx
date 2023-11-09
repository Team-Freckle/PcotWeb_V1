import { useGetOrganizationInfo } from "@hooks/useGetOrganizationInfo";
import React, { useEffect, useState } from "react";

import * as S from "./style";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationInfo = (props: any) => {
  const { serchOrganizationMoreInfo } = useGetOrganizationInfo();
  const [organizationInfo, setOrganizationInfo] = useState<any>();
  useEffect(() => {
    const name = props.name;
    serchOrganizationMoreInfo(name)
      .then((res) => {
        console.log(res.data);
        setOrganizationInfo(
          <S.InfoArea>
            <S.Flex>
              <S.OrganizationName>{res.data.name}</S.OrganizationName>
              <S.Info>{res.data.exposure}</S.Info>
            </S.Flex>
            <S.Comment>{res.data.comment}</S.Comment>
            <S.Info>{res.data.planName}</S.Info>
            <S.Date>{res.data.createTime}</S.Date>
          </S.InfoArea>,
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.Container>
      <S.Title>
        <S.TitleText>Information</S.TitleText>
      </S.Title>
      <S.Container>{organizationInfo}</S.Container>
    </S.Container>
  );
};
