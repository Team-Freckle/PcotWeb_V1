import { ToastError } from "@lib/Toast";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const usePsd = () => {
  const uploadPsd = async (
    Psd: any,
    Comment: any,
    organization: any,
    workspace: any,
    nodeName: any,
  ) => {
    const URL = `${API_URL}/v2/cloud/push/upload/${organization}/${workspace}/${nodeName}`;
    try {
      const formData = new FormData();
      formData.append("file", Psd);
      formData.append("comment", Comment);

      const response = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      ToastError("PSD 업로드에 실패했습니다.");
    }
  };

  const nodePsdList = async (OrgName: any, WokName: any, nodeName: any) => {
    try {
      const API = `${API_URL}/v2/cloud/info/psd/list/${OrgName}/${WokName}/${nodeName}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const psdLayerList = async (OrgName: any, WokName: any, nodeName: any, psdName: any) => {
    try {
      const API = `${API_URL}/v2/cloud/info/layer/${OrgName}/${WokName}/${nodeName}/${psdName}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { uploadPsd, nodePsdList, psdLayerList };
};
