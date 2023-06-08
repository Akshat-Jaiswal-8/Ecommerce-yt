import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD = POST

router.post("/register", registerController);

// lOGIN || METHOD = POST

router.post("/login", loginController);
export default router;
