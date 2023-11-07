import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useOrganizationList = () => {
  const onRecentsListGet = async () => {
    try {
      const API = `${API_URL}/v2/search/organization/belong?page=1`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchListGet = async (query: any, page: any) => {
    try {
      const API = `${API_URL}/v2/search/organization/?query=${query}&page=${page}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { onRecentsListGet, onSearchListGet };
};
