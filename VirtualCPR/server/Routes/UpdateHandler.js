import express from "express";
import Users from "../Modals/UserDetails.js";
const Update = express();

Update.post("/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const value = req.body;
    const data = await Users.findByIdAndUpdate(id, value);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: data,
    });

    console.log(value);
    console.log("updated");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
});

export default Update;
