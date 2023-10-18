import { ToastError, ToastSuccess } from "@lib/Toast";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useCreateWorkSpace = (name: any) => {
  const navigate = useNavigate();
  const [Name, setName] = useState<string>("");
  const [Comment, setComment] = useState<string>("");

  const URL = `${API_URL}/v2/cloud/workspace/create/${name}`;

  const onWorkSpaceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.id === "name") {
        setName(e.target.value);
      } else if (e.target.id === "comment") {
        setComment(e.target.value);
      }
    },
    [],
  );

  const onWorkSpaceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        URL,
        {
          name: Name,
          comment: Comment,
        },
        { withCredentials: true },
      );

      ToastSuccess("워크스페이스 생성에 성공하였습니다.");
      navigate("/");
      return response.data;
    } catch (error) {
      ToastError("워크스페이스 생성에 실패했습니다.");
      console.log(error);
    }
  };

  return { onWorkSpaceChange, onWorkSpaceSubmit, Name, Comment };
};
