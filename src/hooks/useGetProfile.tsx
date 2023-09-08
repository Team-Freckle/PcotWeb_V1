import axios from "axios";
import { useNavigate } from "react-router-dom";

export const API_URL = process.env.REACT_APP_API;

export const useGetProfile = () => {
  const navigate = useNavigate();

  const onGetProfile = async () => {
    const URL = `${API_URL}/v2/search/user/profile`;
    try {
      const response = await axios.get(URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      navigate("/login");
    }
  };
  return { onGetProfile };
};
