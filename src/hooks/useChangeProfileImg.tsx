import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useChangeProfileImg = () => {
  const ProfileImgEditURL = `${API_URL}/v2/user/info/edit/profile`;
  // const WorkspaceImgEditURL = `${API_URL}/v2/user/info/edit/workspace`;
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
    } catch (error) {
      console.log(error);
    }
  };
  return { onProfileImgSubmit };
};
