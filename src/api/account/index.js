
import axios from "axios";
const apiUrl = "http://13.127.209.252";
export const accountpatch = async (data, token) => {
    console.log("ttt",token)
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