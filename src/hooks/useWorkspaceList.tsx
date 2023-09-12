import axios from "axios";
import { useState } from "react";

export const API_URL = process.env.REACT_APP_API;

export const useWorkspaceList = () => {
  const [Lists, setLists] = useState<string>("");

  const onRecentsListGet = async (name: any) => {
    try {
      if (name === "recents") {
        const API = `${API_URL}/v2/search/workspace/related/recent`;
        const response = await axios.get(API, {
          withCredentials: true,
        });
        setLists(response.data);
      } else {
        console.log("error");
      }
    } catch {
      console.log("error");
    }
  };

  return { Lists, onRecentsListGet };
};
