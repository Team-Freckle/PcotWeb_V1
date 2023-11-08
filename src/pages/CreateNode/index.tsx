import { useGitgraph } from "@hooks/useGitgraph";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./style";

export const CreateNode = () => {
  const { organization, workspace } = useParams();
  const { drawNodeTree } = useGitgraph();
  const [names, setNames] = useState<string[]>([]);
  const { onNodeChange, onNodeSubmit, Name, Comment, PsdName } = useGitgraph();

  useEffect(() => {
    drawNodeTree(organization, workspace).then((res) => {
      const extractNames = (node: any) => {
        if (node && node.name) {
          setNames((prevNames: string[]) => [...prevNames, node.name]);
        }
        if (node.child && node.child.length > 0) {
          node.child.forEach(extractNames);
        }
      };
      extractNames(res.data);
    });
  }, []);

  return (
    <div>
      <S.InputBoxs>
        <S.InputBox>
          <S.InputText style={{ bottom: "60px" }}>Name</S.InputText>
          <S.Input
            type="text"
            placeholder="name"
            name="Name"
            onChange={onNodeChange}
            value={Name}
          />
        </S.InputBox>

        <S.InputBox>
          <S.InputText style={{ bottom: "60px" }}>Comment</S.InputText>
          <S.Input
            type="text"
            placeholder="comment"
            name="Comment"
            onChange={onNodeChange}
            value={Comment}
          />
        </S.InputBox>

        <S.InputBox>
          <S.InputText style={{ bottom: "60px" }}>Parent Node</S.InputText>
          <S.SelectParent onChange={onNodeChange} name="ParentName">
            <S.OptionParent disabled selected>
              ==Select Option==
            </S.OptionParent>
            {names.map((name) => (
              <S.OptionParent key={name} value={name}>
                {name}
              </S.OptionParent>
            ))}
          </S.SelectParent>
        </S.InputBox>
      </S.InputBoxs>

      <S.PsdBoxs>
        <S.InputBox>
          <input type="file" name="Psd" id="Psd" accept=".psd" onChange={onNodeChange} />
        </S.InputBox>

        <S.InputBox>
          <S.InputText style={{ bottom: "60px" }}>PSD Name</S.InputText>
          <S.Input
            type="text"
            name="PsdName"
            id="PsdName"
            placeholder="PsdName"
            value={PsdName}
            onChange={onNodeChange}
          />
        </S.InputBox>
      </S.PsdBoxs>

      <S.ButtonBox>
        <S.CompleteBtn onClick={() => onNodeSubmit(organization, workspace)}>
          Complete
        </S.CompleteBtn>
      </S.ButtonBox>
    </div>
  );
};
