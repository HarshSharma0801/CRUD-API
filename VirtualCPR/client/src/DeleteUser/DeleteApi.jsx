import axios from "axios";

const deleteUserApi = async (userId) => {
  const requestData = {
    id: userId,
  };
  try {
    const response = await axios.post("/delete", requestData);
    if (response.data.success) {
      console.log(response.data);
      return response.data;
    } else {
      console.error("Failed to delete user:", response.data.message);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default deleteUserApi;
