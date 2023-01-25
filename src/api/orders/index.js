import axios from "axios";
const apiUrl = "http://13.127.209.252";


export const Orderget = async (token) => {
    try {
      const res = await axios.get(`${apiUrl}/ecom/my-placed-order/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  };