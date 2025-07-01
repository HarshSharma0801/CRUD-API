import axios from "axios";

const fetchUsersApi = async () => {
  try {
    const response = await axios.get("/read");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchUsersApi;
