import axios from "axios";
const apiUrl = "http://13.127.209.252";
export const productPost = async (data, token) => {
  try {
    const res = await axios.post(`${apiUrl}/ecom/product/`, data, {
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

export const productGet = async (token) => {
  try {
    const res = await axios.get(`${apiUrl}/ecom/my-product/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const productPatch = async (data, token, id) => {
  try {
    const res = await axios.patch(`${apiUrl}/ecom/product/${id}/`, data, {
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


export const productDelete = async (token, pdelete) => {
  const res = await axios.delete(`${apiUrl}/ecom/product/${pdelete}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;

  
};
