import express from "express";
import Users from "../Modals/UserDetails.js";

const readUserRouter = express();

readUserRouter.get("/read", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
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

export default readUserRouter;
