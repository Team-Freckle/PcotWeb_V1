import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useGetOrganizationInfo = () => {
  const serchOrganizationMoreInfo = async (organization: any) => {
    try {
      const response = await axios.get(
        `${API_URL}/v2/search/organization/more?name=${organization}`,
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const serchOrganizationMamber = async (organization: any) => {
    try {
      const response = await axios.get(
        `${API_URL}/v2/search/organization/user/belong?organization=${organization}`,
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { serchOrganizationMoreInfo, serchOrganizationMamber };
};
