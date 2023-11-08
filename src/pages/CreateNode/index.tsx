import { useGitgraph } from "@hooks/useGitgraph";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <input type="text" placeholder="name" name="Name" onChange={onNodeChange} value={Name} />
      <input
        type="text"
        placeholder="comment"
        name="Comment"
        onChange={onNodeChange}
        value={Comment}
      />
      <select onChange={onNodeChange} name="ParentName">
        {names.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <input type="file" name="Psd" id="Psd" accept=".psd" onChange={onNodeChange} />
      <input
        type="text"
        name="PsdName"
        id="PsdName"
        placeholder="PsdName"
        value={PsdName}
        onChange={onNodeChange}
      />

      <button onClick={() => onNodeSubmit(organization, workspace)}>submit</button>
    </div>
  );
};
