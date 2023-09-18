import axios from "axios";
import React, { useCallback, useState } from "react";
import { ToastError, ToastSuccess } from "@lib/Toast";
import { useNavigate } from "react-router-dom";
import { useChangeProfileImg } from "./useChangeProfileImg";

export const API_URL = process.env.REACT_APP_API;

export const useChangeProfile = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Bio, setBio] = useState<string>("");

  const { onProfileImgSubmit } = useChangeProfileImg();

  const ProfileEditURL = `${API_URL}/v2/user/info/edit`;

  const onProfileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.id === "name") {
        setName(e.target.value);
      } else if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "bio") {
        setBio(e.target.value);
      }
    },
    [],
  );

  const onProfileSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const name = "profileImg";
        onProfileImgSubmit(name);
        const response = await axios.put(
          ProfileEditURL,
          {
            name: Name,
            email: Email,
            comment: Bio,
          },
          { withCredentials: true },
        );

        ToastSuccess("프로필 수정에 성공하였습니다.");
        navigate("/");
        return response.data;
      } catch (error) {
        ToastError("프로필 수정에 실패했습니다.");
      }
    },
    [Name, Email, Bio],
  );

  return {
    onProfileChange,
    Name,
    Email,
    Bio,
    setName,
    setEmail,
    setBio,
    onProfileSubmit,
  };
};
