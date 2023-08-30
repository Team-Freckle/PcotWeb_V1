import axios from "axios";
import React, { useCallback, useState } from "react";
import { ToastError, ToastSuccess, ToastWarning } from "../lib/Toast";

export const API_URL = process.env.REACT_APP_API;

export const useProfile = () => {
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Bio, setBio] = useState<string>("");

  const URL = `${API_URL}/v2/profile.do`;

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
      if (Name && Email && Bio) {
        try {
          const response = await axios.post(
            URL,
            {
              name: Name,
              email: Email,
              bio: Bio,
            },
            { withCredentials: true },
          );
          console.log(response);
          ToastSuccess("프로필 수정에 성공하였습니다.");
        } catch (error) {
          ToastError("프로필 수정에 실패했습니다.");
        }
      } else {
        ToastWarning("모든 항목을 입력해주세요");
      }
    },
    [Name, Email, Bio, URL],
  );

  return { onProfileChange, Name, Email, Bio, onProfileSubmit };
};
