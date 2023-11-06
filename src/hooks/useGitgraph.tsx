import { ToastError, ToastSuccess, ToastWarning } from "@lib/Toast";
import React, { useCallback, useState } from "react";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useGitgraph = () => {
  const [Name, setName] = useState<string>("");
  const [Comment, setComment] = useState<string>("");
  const [ParentName, setParentName] = useState<string>("");

  const URL = `${API_URL}/v2/cloud/node/create/aws-test-org/test-work`;

  const onNodeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "new node") {
      setComment(e.target.value);
    } else if (e.target.name === "main") {
      setParentName(e.target.value);
    }
  }, []);

  const onNodeSubmit = async () => {
    try {
      const response = await axios.post(
        URL,
        {
          name: Name,
          comment: Comment,
          // parent: ParentName,
        },
        { withCredentials: true },
      );

      ToastSuccess("노드 생성에 성공하였습니다.");
      // ({ state: { name: Name, comment: Comment } });
      return response.data;
    } catch (error) {
      ToastError("노드 생성에 실패했습니다.");
    }
  };

  const drawNodeTree = async (OrgName: any, WokName: any) => {
    const getUrl = `${API_URL}/v2/search/node/get/${OrgName}/${WokName}`;
    try {
      const response = await axios.get(getUrl, {
        withCredentials: true,
      });
      return response.data;
    } catch {
      ToastError("에러");
    }
  };

  return {
    onNodeChange,
    drawNodeTree,
  };
};
