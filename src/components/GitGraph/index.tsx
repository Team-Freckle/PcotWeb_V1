import React, { useState } from "react";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";

export const GitGraph = () => {
  const [mkNode, setMkNode] = useState(0);
  // console.log(mkNode);

  const withoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  });

  const initGraph = (gitgraph: any) => {
    const main = gitgraph.branch("main").commit("zero");
    // main.commit("업데이트1");
  };

  const node = () => {
    if (mkNode == 1) {
      console.log("gooooooooood");
      setMkNode(0);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          node();
          setMkNode(1);
        }}
      >
        노드 추가
      </button>
      <Gitgraph options={{ template: withoutAuthor, orientation: Orientation.VerticalReverse }}>
        {(gitgraph) => {
          initGraph(gitgraph);
        }}
        {/* {initGraph.bind(this)} */}
      </Gitgraph>
    </div>
  );
};

export default GitGraph;
