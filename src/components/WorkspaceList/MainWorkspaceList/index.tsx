import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useWorkspaceList } from "@hooks/useWorkspaceList";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const WorkspaceList = (props: any) => {
  const navigate = useNavigate();
  const { onRecentsListGet } = useWorkspaceList();
  const [WorkspaceList, setWorkspaceList] = useState<Array<any>>([]);
  useEffect(() => {
    const name = props.name;
    onRecentsListGet(name)
      .then((res) => {
        setWorkspaceList(
          res.map((list: any) => (
            <S.WorkspaceItem
              key={list.createTime}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/workspace/${list.organizationName}/${list.name}`)}
            >
              <S.WorkspaceImg
                src={`${API_URL}/v2/search/workspace/image?organization=${list.organizationName}&workspace=${list.name}`}
              />
              <S.WorkspaceName>{list.name}</S.WorkspaceName>
              <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
            </S.WorkspaceItem>
          )),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.Container>
      <S.Title>{props.name}</S.Title>
      {WorkspaceList ? <S.WorkspaceList>{WorkspaceList}</S.WorkspaceList> : <div>Loding</div>}
    </S.Container>
  );
};
