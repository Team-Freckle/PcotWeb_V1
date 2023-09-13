import React, { useState } from "react";
import { Gitgraph, templateExtend, TemplateName, Orientation } from "@gitgraph/react";

import * as S from "./style";
import Serch from "@assets/plus.svg";

export const GitGraph = () => {
  const [mkNode, setMkNode] = useState(1);
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
    main.commit("업데이트1");
  };

  const node = () => {
    if (mkNode == 1) {
      console.log("gooooooooood");
      setMkNode(0);
    }
  };

  return (
    <S.Container>
      <S.ContributesText>Node Graph</S.ContributesText>
      <S.Button
        onClick={() => {
          node();
          setMkNode(1);
        }}
      >
        <img src={Serch} alt="Search" />
      </S.Button>

      <S.GraphBox>
        <Gitgraph options={{ template: withoutAuthor, orientation: Orientation.VerticalReverse }}>
          {(gitgraph) => {
            initGraph(gitgraph);
          }}
          {/* {initGraph.bind(this)} */}
        </Gitgraph>
      </S.GraphBox>
    </S.Container>
  );
};

export default GitGraph;
