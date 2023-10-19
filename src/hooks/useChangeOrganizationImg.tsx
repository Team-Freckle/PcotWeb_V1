import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useChangeOrganizationImg = () => {
  const OrganizationChangeImgURL = `${API_URL}/v2/cloud/organization/edit/profile`;
  const onOrganizationImgSubmit = async (Img: any, name: any) => {
    try {
      const formData = new FormData();
      formData.append("image", Img);
      formData.append("organization", name);

      await axios.put(OrganizationChangeImgURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return { onOrganizationImgSubmit };
};
