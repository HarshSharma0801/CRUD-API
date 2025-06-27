import axios from "axios";

const Delete = async (id) => {
  const sentdata = {
    id: id,
  };
  try {
    const res = await axios.post("/delete", sentdata);
    if (res.data.success) {
      console.log(res.data);
      return res.data;
    } else {
      console.error("Failed to delete user:", res.data.message);
      return res.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Delete;
