import React, { useState } from "react";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";

export const GitGraph = () => {
  const withoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  });

  const initGraph = (gitgraph: any) => {
    // const [mkBranch, setMkBranch] = useState();
    // const [mkNode, setMkNode] = useState(0);

    const main = gitgraph.branch("main").commit("Initial commit");
    main.commit("업데이트 내용");
    const user2 = main.branch("user2");
    user2.commit("업데이트 내용2");
    const user3 = main.branch("user3");
    user3.commit("업데이트 내용3");
    main.commit("업데이트 내용4");
    main.merge(user2);
    main.merge(user3);
    main.commit("업데이트 내용6");
  };

  return (
    <Gitgraph options={{ template: withoutAuthor, orientation: Orientation.VerticalReverse }}>
      {(gitgraph) => {
        initGraph(gitgraph);
      }}
    </Gitgraph>
  );
};

export default GitGraph;
