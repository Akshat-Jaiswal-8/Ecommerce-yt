import express from "express";
import {
  isAdmin,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD = POST

router.post("/register", registerController);

// lOGIN || METHOD = POST

router.post("/login", loginController);

// test routes

router.get("/test", requireSignIn, isAdmin, testController);

// protected route

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
