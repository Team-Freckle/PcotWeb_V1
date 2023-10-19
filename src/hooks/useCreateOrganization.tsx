import { ToastError, ToastSuccess } from "@lib/Toast";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileImgd from "@assets/Login-Logo.svg";
import { useChangeOrganizationImg } from "./useChangeOrganizationImg";

export const API_URL = process.env.REACT_APP_API;

export const useCreateOrganization = () => {
  const navigate = useNavigate();
  const { onOrganizationImgSubmit } = useChangeOrganizationImg();

  const [Name, setName] = useState<string>("");
  const [Comment, setComment] = useState<string>("");
  const [ProfileImg, setProfileImg] = useState<any>(ProfileImgd);
  const [exposure, setExposure] = useState<string>("public");

  const URL = `${API_URL}/v2/cloud/organization/create`;

  useEffect(() => {
    console.log(exposure);
  }, [exposure]);

  const onOrganizationChange = useCallback((e: any) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "comment") {
      setComment(e.target.value);
    } else if (e.target.id === "profileImg") {
      setProfileImg(e.target.value);
      console.log(e.target.value); //TODO 미리 폼데이터로 만들어서 서버에 보내보기
    }
  }, []);

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
      onOrganizationImgSubmit(ProfileImg, Name);
      navigate("/");
      return response.data;
    } catch (error) {
      ToastError("조직 생성에 실패했습니다.");
    }
  };

  return { onOrganizationChange, Name, Comment, exposure, setExposure, onOrganizationSubmit };
};
