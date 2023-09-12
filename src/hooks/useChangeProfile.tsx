import axios from "axios";
import React, { useCallback, useState } from "react";
import { ToastError, ToastSuccess } from "@lib/Toast";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useProfile = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Bio, setBio] = useState<string>("");
  const [NewprofileImg, setNewProfileImg] = useState<any>(null);

  const ProfileEditURL = `${API_URL}/v2/user/info/edit`;
  const ProfileImgEditURL = `${API_URL}/v2/user/info/edit/profile`;

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

  const onProfileImgChange = (img: any) => {
    setNewProfileImg(img);
  };

  const onProfileSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        if (NewprofileImg != null) {
          const formData = new FormData();
          formData.append("image", NewprofileImg);
          await axios.put(ProfileImgEditURL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          });
        }
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
    [Name, Email, Bio, NewprofileImg],
  );

  return {
    onProfileChange,
    Name,
    Email,
    Bio,
    NewprofileImg,
    setName,
    setEmail,
    setBio,
    onProfileSubmit,
    onProfileImgChange,
  };
};
