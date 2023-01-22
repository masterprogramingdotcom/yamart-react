
import axios from "axios";
const apiUrl = "http://13.127.209.252";
export const productPatch = async (data, token, id) => {
    try {
      const res = await axios.patch(`${apiUrl}/auth/profile/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      return res;
    } catch (error) {
      return error;
    }
  };