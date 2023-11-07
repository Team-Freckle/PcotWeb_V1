import { useOrganizationList } from "@hooks/useOrganizationList";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./style";

export const OrganizationList = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const { onSearchListGet } = useOrganizationList();
  const [organizationList, setOrganizationList] = useState<Array<any>>([]);
  useEffect(() => {
    onSearchListGet(query, 1)
      .then((res) => {
        const orgList = res.map((list: any) => (
          <div
            onClick={() => navigate(`/organization/${list.name}`)}
            key={list.idx}
            style={{ textDecoration: "none" }}
          >
            <S.Box>
              <S.img src={`https://via.placeholder.com/300`} />
              <S.TextBox>
                <S.TitleBox>{list.name}</S.TitleBox>
                <S.DescriptionBox>{list.comment}</S.DescriptionBox>
              </S.TextBox>
            </S.Box>
          </div>
        ));
        setOrganizationList(orgList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <S.Container>{organizationList}</S.Container>
    </div>
  );
};
