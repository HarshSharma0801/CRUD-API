import express from "express";
import Users from "../Modals/UserDetails.js";
const addUserRouter = express();

addUserRouter.post("/add", async (req, res) => {
  try {
    const userData = req.body;
    await Users.insertMany([userData]);
    res.status(200).json({
      success: true,
      message: "User added successfully",
      data: userData,
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

export default addUserRouter;
