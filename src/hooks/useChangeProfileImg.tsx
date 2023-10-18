import { ToastError } from "@lib/Toast";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useChangeProfileImg = () => {
  const ProfileImgEditURL = `${API_URL}/v2/user/info/edit/profile`;
  const onProfileImgSubmit = async (name: any, ProfileImg: any) => {
    try {
      const formData = new FormData();
      formData.append("image", ProfileImg);
      if (name === "ProfileImg") {
        await axios.put(ProfileImgEditURL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      }
    } catch (error: any) {
      if (error.response.data.status === 400) {
        ToastError("올바르지 않은 이미지 형식입니다.");
      } else if (error.response.data.status === 500) {
        ToastError("이미지의 용량이 너무 큽니다.\n5MB 이하의 이미지를 업로드해주세요.");
      } else {
        ToastError("프로필 이미지 수정에 실패했습니다.");
        console.log(error);
      }
    }
  };
  return { onProfileImgSubmit };
};
