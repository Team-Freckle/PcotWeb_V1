import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useWorkspaceList = () => {
  const onRecentsListGet = async (name: any) => {
    try {
      if (name === "recents") {
        const API = `${API_URL}/v2/search/workspace/related/recent`;
        const response = await axios.get(API, {
          withCredentials: true,
        });
        return response.data.data;
      } else {
        console.log("error");
      }
    } catch {
      console.log("error");
    }
  };

  const onWorkspacesListGet = async (name: any) => {
    try {
      const API = `${API_URL}/v2/search/workspace/?organization=test-org11&page=1`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data.data;
    } catch {
      console.log("error");
    }
  };

  return { onRecentsListGet, onWorkspacesListGet };
};
