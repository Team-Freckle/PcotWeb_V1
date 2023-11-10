import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useGetOrganizationStorageSize = () => {
  const getOrganizationValue = async (organization: any) => {
    try {
      const response = await axios.get(
        `${API_URL}/v2/search/organization/storage/used/size?name=${organization}`,
        {
          withCredentials: true,
        },
      );
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { getOrganizationValue };
};
