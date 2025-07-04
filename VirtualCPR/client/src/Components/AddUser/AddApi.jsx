import axios from "axios";

const addUserApi = async (userData) => {
  try {
    const response = await axios.post("/add", userData);
    if (response.data.success) {
      console.log(response.data);
      return response.data;
    } else {
      console.error("Failed to add user:", response.data.message);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addUserApi;
