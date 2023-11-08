import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Gitgraph } from "@gitgraph/react";
import { TemplateName, Orientation } from "@gitgraph/core";

import * as S from "./style";
import addNode from "@assets/addNode.svg";
import { useGitgraph } from "@hooks/useGitgraph";
import PsdNodeModal from "@components/PsdNodeModal";

interface GitTreeNode {
  name: string;
  comment: string;
  child: GitTreeNode[];
}

export const GitGraph = () => {
  const navigate = useNavigate();
  const { organization, workspace } = useParams();
  const { drawNodeTree } = useGitgraph();
  const [data, setData] = useState<GitTreeNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nodeName, setNodeName] = useState<string>("");
  const [nodeComment, setNodeComment] = useState<any>(null);

  useEffect(() => {
    drawNodeTree(organization, workspace).then((res) => {
      setData(res.data);
    });
  }, [organization, workspace]);

  const handleNodeClick = (node: GitTreeNode) => {
    console.log(node);
    setIsModalOpen(true);
    setNodeName(node.name);
    setNodeComment(node.comment);
  };

  return (
    <div>
      <S.Container>
        {data ? (
          <Gitgraph
            options={{
              orientation: Orientation.Horizontal,
              template: TemplateName.Metro,
            }}
          >
            {(gitgraph: any) => {
              const master = gitgraph.branch("main");

              const drawBranch = (node: GitTreeNode, parentBranch: any) => {
                const branch = parentBranch.branch(node.name);
                branch.commit({
                  subject: node.comment,
                  onClick: () => handleNodeClick(node),
                });
                if (node.child.length > 0) {
                  node.child.forEach((child) => {
                    drawBranch(child, branch);
                  });
                }
              };

              if (data) {
                drawBranch(data, master);
              }
            }}
          </Gitgraph>
        ) : (
          <div>Loading</div>
        )}
      </S.Container>
      {isModalOpen && (
        <PsdNodeModal
          active={isModalOpen}
          setActive={setIsModalOpen}
          nodeName={nodeName}
          nodeComment={nodeComment}
        />
      )}
      <S.addNode
        src={addNode}
        alt="plus"
        onClick={() => {
          navigate(`/create-node/${organization}/${workspace}`);
        }}
      />
    </div>
  );
};
