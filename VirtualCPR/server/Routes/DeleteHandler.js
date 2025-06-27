import express from "express";
import Users from "../Modals/UserDetails.js";
const Deleted = express();

Deleted.post("/delete", async (req, res) => {
  const id = req.body.id;

  try {
    console.log(id);
    await Users.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: { id: id },
    });

    console.log("deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
});

export default Deleted;
