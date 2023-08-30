import React from "react";
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
    const master = gitgraph.branch("master");
    master.commit("das");
  };

  return (
    <div>
      <Gitgraph
        options={{
          orientation: Orientation.VerticalReverse,
          reverseArrow: true,
          template: withoutAuthor,
        }}
      >
        {initGraph.bind(this)}
      </Gitgraph>
    </div>
  );
};
