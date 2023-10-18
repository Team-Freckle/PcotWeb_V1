import { useWorkspaceList } from "@hooks/useWorkspaceList";
import React, { useEffect, useState } from "react";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const OrganizationWorkspaceList = (props: any) => {
  const navigate = useNavigate();
  const { onWorkspacesListGet } = useWorkspaceList();
  const [WorkspaceList, setWorkspaceList] = useState<Array<any>>([]);
  useEffect(() => {
    const name = props.name;
    onWorkspacesListGet(name)
      .then((res) => {
        setWorkspaceList(
          res.map((list: any) => (
            <S.WorkspaceItem key={list.createTime}>
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
      <S.Title>
        <S.TitleText>Workspaces</S.TitleText>
        <S.TitleButton
          onClick={() => {
            navigate(`/workspace/create/${props.name}`);
          }}
        >
          + add Workspace
        </S.TitleButton>
      </S.Title>
      {WorkspaceList ? <S.WorkspaceList>{WorkspaceList}</S.WorkspaceList> : <div>Loding</div>}
    </S.Container>
  );
};
