import { ToastError, ToastSuccess } from "@lib/Toast";
import { useCallback, useState } from "react";
import axios from "axios";
import { usePsd } from "./usePsd";

export const API_URL = process.env.REACT_APP_API;

export const useGitgraph = () => {
  const [Name, setName] = useState<string>("");
  const [Comment, setComment] = useState<string>("");
  const [ParentName, setParentName] = useState<string>("");
  const [PsdName, setPsdName] = useState<string>("");
  const [Psd, setPsd] = useState<any>(null);

  const { uploadPsd } = usePsd();

  const onNodeChange = useCallback((e: any) => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else if (e.target.name === "Comment") {
      setComment(e.target.value);
    } else if (e.target.name === "ParentName") {
      setParentName(e.target.value);
    } else if (e.target.name === "PsdName") {
      setPsdName(e.target.value);
    } else if (e.target.name === "Psd") {
      const file = e.target.files[0];
      console.log(file);
      setPsd(file);
    }
  }, []);

  const onNodeSubmit = async (organization: any, workspace: any) => {
    try {
      if (!Name || !Comment || !ParentName || !Psd || !PsdName) {
        ToastError("모든 항목을 입력해주세요.");
        return;
      }
      const URL = `${API_URL}/v2/cloud/node/create/${organization}/${workspace}`;
      const response = await axios.post(
        URL,
        {
          name: Name,
          comment: Comment,
          parentName: ParentName,
        },
        { withCredentials: true },
      );

      ToastSuccess("노드 생성에 성공하였습니다.");
      await uploadPsd(Psd, PsdName, organization, workspace, Name);
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
    onNodeSubmit,
    Name,
    Comment,
    ParentName,
    Psd,
    PsdName,
  };
};
