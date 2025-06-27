import express from "express";
import Users from "../Modals/UserDetails.js";

const Read = express();

Read.get("/read", async (req, res) => {
  try {
    const data = await Users.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
});

export default Read;
