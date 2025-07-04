import axios from "axios";

const updateUserApi = async (userData, userId) => {
  try {
    userData._id = userId;
    const response = await axios.post(`/edit/${userId}`, userData);
    if (response.data.success) {
      console.log(response.data);
      return response.data;
    } else {
      console.error("Failed to update user:", response.data.message);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default updateUserApi;
