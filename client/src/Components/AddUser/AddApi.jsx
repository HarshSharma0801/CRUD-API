import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = async (data) => {
  // const Navigate = useNavigate();

  try {
    const res = await axios.post("/add", data);
    if (res.data.success) {
      console.log(res.data);
      return res.data;
      // Navigate("/Read")
    } else {
      console.error("Failed to add user:", res.data.message);
      return res.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Add;
