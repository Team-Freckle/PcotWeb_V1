import axios from "axios";
import { useState } from "react";

export const API_URL = process.env.REACT_APP_API;

export const useChangeProfileImg = () => {
  const [NewprofileImg, setNewProfileImg] = useState<any>("");

  const onProfileImgChange = (image: any) => {
    setNewProfileImg(image);
  };

  const onProfileImgSubmit = async (name: any) => {
    try {
      let ProfileImgEditURL = "";
      if (name === "profileImg") {
        ProfileImgEditURL = `${API_URL}/v2/user/info/edit/profile`;
        console.log(NewprofileImg);
      } else if (name === "workspaceImg") {
        ProfileImgEditURL = `${API_URL}/v2/user/info/edit/workspace`;
      }
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
  return { onProfileImgChange, onProfileImgSubmit };
};
