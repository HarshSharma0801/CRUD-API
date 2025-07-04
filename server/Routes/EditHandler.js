import express from "express";
import Users from "../Modals/UserDetails.js";

const Edit = express();

Edit.get("/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const check = await Users.findById(id);
    if (check) {
      res.status(200).json({
        success: true,
        message: "User found successfully",
        data: check,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error: error.message,
    });
  }
});

export default Edit;
