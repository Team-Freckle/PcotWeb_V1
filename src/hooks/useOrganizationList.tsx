import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useOrganizationList = () => {
  const onRecentsListGet = async (name: any) => {
    try {
      if (name === "recents") {
        const API = `${API_URL}/v2/search/organization/?query=test&page=1`;
        const response = await axios.get(API, {
          withCredentials: true,
        });
        return response.data.data;
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { onRecentsListGet };
};
