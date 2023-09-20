import { ToastError, ToastSuccess } from "@lib/Toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useCreateOrganization = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState<string>("");
  const [Comment, setComment] = useState<string>("");
  const [exposure, setExposure] = useState<string>("public");

  const URL = `${API_URL}/v2/cloud/organization/create`;

  useEffect(() => {
    console.log(exposure);
  }, [exposure]);

  const onOrganizationChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.id === "name") {
        setName(e.target.value);
      } else if (e.target.id === "comment") {
        setComment(e.target.value);
      }
    },
    [],
  );

  const onOrganizationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        URL,
        {
          name: Name,
          exposure: exposure,
          comment: Comment,
        },
        { withCredentials: true },
      );

      ToastSuccess("조직 생성에 성공하였습니다.");
      navigate("/");
      return response.data;
    } catch (error) {
      ToastError("조직 생성에 실패했습니다.");
    }
  };

  return { onOrganizationChange, Name, Comment, exposure, setExposure, onOrganizationSubmit };
};
