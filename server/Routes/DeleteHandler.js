import express from "express";
import Users from "../Modals/UserDetails.js";
const deleteUserRouter = express();

deleteUserRouter.post("/delete", async (req, res) => {
  const userId = req.body.id;
  try {
    await Users.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      id: userId,
    });
    console.log("Deleted User", userId);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
});

export default deleteUserRouter;
