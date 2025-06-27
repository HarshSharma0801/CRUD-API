import express from "express";
import Users from "../Modals/UserDetails.js";
const Added = express();

Added.post("/add", async (req, res) => {
  try {
    const data = req.body;

    await Users.insertMany([data]);
    res.status(200).json({
      success: true,
      message: "User added successfully",
      data: data,
    });
    console.log("Added User");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
});

export default Added;
