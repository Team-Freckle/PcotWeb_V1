import React, { useEffect } from "react";
import * as S from "./style";
import { useWorkspaceList } from "@hooks/useWorkspaceList";

export const WorkspaceList = (props: any) => {
  const { Lists, onRecentsListGet } = useWorkspaceList();
  useEffect(() => {
    const name = props.name;
    onRecentsListGet(name);
  }, []);
  return (
    <S.Container>
      <S.Title>{props.name}</S.Title>
      <S.WorkspaceList>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
        <S.WorkspaceItem>
          <S.WorkspaceImg />
          <S.WorkspaceName>제목</S.WorkspaceName>
          <S.WorkspaceSubName>워크스페이스</S.WorkspaceSubName>
        </S.WorkspaceItem>
      </S.WorkspaceList>
    </S.Container>
  );
};
