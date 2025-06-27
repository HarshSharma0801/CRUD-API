import axios from "axios";

const Update = async (data, id) => {
  try {
    data._id = id;
    const res = await axios.post(`/edit/${id}`, data);
    if (res.data.success) {
      console.log(res.data);
      return res.data;
    } else {
      console.error("Failed to update user:", res.data.message);
      return res.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Update;
