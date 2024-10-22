import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useAlarm = () => {
  const onGetAlarm = async (page: any) => {
    try {
      const API = `${API_URL}/v2/search/alarm/get?page=${page}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const onPatchAlarm = async (idx: any) => {
    try {
      const API = `${API_URL}/v2/search/alarm/check?idx=${idx}`;
      const response = await axios.patch(API, null, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { onGetAlarm, onPatchAlarm };
};
