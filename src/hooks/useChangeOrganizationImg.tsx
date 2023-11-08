import { ToastError, ToastSuccess } from "@lib/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useChangeOrganizationImg = () => {
  const navigate = useNavigate();
  const onOrganizationImgSubmit = async (formData: any) => {
    const OrganizationChangeImgURL = `${API_URL}/v2/cloud/organization/edit/profile`;
    try {
      await axios.put(OrganizationChangeImgURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      ToastSuccess("조직 이미지를 정상적으로 등록했습니다");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      ToastError("조직 이미지 등록에 실패했습니다");
    }
  };

  const onOrganizationDefaltImg = async (name: any) => {
    const OrganizationDefaltImgURL = `${API_URL}/v2/cloud/organization/image/random/${name}`;
    try {
      await axios.put(OrganizationDefaltImgURL, null, {
        withCredentials: true,
      });
      ToastSuccess("조직 이미지를 정상적으로 등록했습니다");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      ToastError("조직 이미지 등록에 실패했습니다");
    }
  };
  return { onOrganizationImgSubmit, onOrganizationDefaltImg };
};
