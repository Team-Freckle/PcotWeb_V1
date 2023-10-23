import { ToastError, ToastSuccess } from "@lib/Toast";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useChangeOrganizationImg = () => {
  const OrganizationChangeImgURL = `${API_URL}/v2/cloud/organization/edit/profile`;
  const onOrganizationImgSubmit = async (formData: any) => {
    try {
      await axios.put(OrganizationChangeImgURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      ToastSuccess("조직 이미지를 정상적으로 등록했습니다");
    } catch (error: any) {
      console.log(error);
      ToastError("조직 이미지 등록에 실패했습니다");
    }
  };
  return { onOrganizationImgSubmit };
};
