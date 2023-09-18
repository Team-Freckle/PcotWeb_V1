import axios from "axios";
import { useState } from "react";

export const API_URL = process.env.REACT_APP_API;

export const useChangeProfileImg = () => {
  const [NewprofileImg, setNewProfileImg] = useState<any>(null);

  const onProfileImgChange = (img: any) => {
    setNewProfileImg(img);
  };

  const onProfileImgSubmit = async (name: any) => {
    let ProfileImgEditURL = "";
    if (name === "profileImg") {
      ProfileImgEditURL = `${API_URL}/v2/user/info/edit/profile`;
    } else if (name === "workspaceImg") {
      ProfileImgEditURL = `${API_URL}/v2/user/info/edit/workspace`;
    }
    try {
      const formData = new FormData();
      formData.append("image", NewprofileImg);
      await axios.put(ProfileImgEditURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { onProfileImgChange, onProfileImgSubmit, NewprofileImg };
};
