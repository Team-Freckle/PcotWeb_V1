import axios from "axios";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useLogout = () => {
  const naivgate = useNavigate();
  const onLogout = async () => {
    const URL = `${API_URL}/v2/logout.do`;
    try {
      await axios.get(URL, {
        withCredentials: true,
      });
      naivgate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return { onLogout };
};
