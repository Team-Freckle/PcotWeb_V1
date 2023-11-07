import { useOrganizationList } from "@hooks/useOrganizationList";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

export const OrganizationList = () => {
  const navigate = useNavigate();
  const { onRecentsListGet } = useOrganizationList();
  const [organizationList, setOrganizationList] = useState<Array<any>>([]);
  // useEffect(() => {
  //   onRecentsListGet()
  //     .then((res) => {
  //       setOrganizationList(
  //         res.map((list: any) => (
  //           <div
  //             onClick={() => navigate(`/organization/${list.name}`)}
  //             key={list.idx}
  //             style={{ textDecoration: "none" }}
  //           ></div>
  //         )),
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <S.Container>
        <S.Box>
          <S.img src={`https://via.placeholder.com/300`} />
          <S.TextBox>
            <S.TitleBox>asdasdsa</S.TitleBox>
            <S.DescriptionBox>
              ㅇㄴ로ㅠㄴㄹ늉리ㅓㅇ뉴ㅓㅗㄹ유너로ㅠㅇ너륭뉼나러오뉴란어ㅠ라널
            </S.DescriptionBox>
          </S.TextBox>
        </S.Box>
        <S.Box>
          <S.img src={`https://via.placeholder.com/300`} />
          <S.TextBox>
            <S.TitleBox>asdasdsa</S.TitleBox>
            <S.DescriptionBox>
              ㅇㄴ로ㅠㄴㄹ늉리ㅓㅇ뉴ㅓㅗㄹ유너로ㅠㅇ너륭뉼나러오뉴란어ㅠ라널
            </S.DescriptionBox>
          </S.TextBox>
        </S.Box>
        <S.Box>
          <S.img src={`https://via.placeholder.com/300`} />
          <S.TextBox>
            <S.TitleBox>asdasdsa</S.TitleBox>
            <S.DescriptionBox>
              ㅇㄴ로ㅠㄴㄹ늉리ㅓㅇ뉴ㅓㅗㄹ유너로ㅠㅇ너륭뉼나러오뉴란어ㅠ라널
            </S.DescriptionBox>
          </S.TextBox>
        </S.Box>
        <S.Box>
          <S.img src={`https://via.placeholder.com/300`} />
          <S.TextBox>
            <S.TitleBox>asdasdsa</S.TitleBox>
            <S.DescriptionBox>
              ㅇㄴ로ㅠㄴㄹ늉리ㅓㅇ뉴ㅓㅗㄹ유너로ㅠㅇ너륭뉼나러오뉴란어ㅠ라널
            </S.DescriptionBox>
          </S.TextBox>
        </S.Box>
        <S.Box>
          <S.img src={`https://via.placeholder.com/300`} />
          <S.TextBox>
            <S.TitleBox>asdasdsa</S.TitleBox>
            <S.DescriptionBox>
              ㅇㄴ로ㅠㄴㄹ늉리ㅓㅇ뉴ㅓㅗㄹ유너로ㅠㅇ너륭뉼나러오뉴란어ㅠ라널
            </S.DescriptionBox>
          </S.TextBox>
        </S.Box>
      </S.Container>
    </div>
  );
};
