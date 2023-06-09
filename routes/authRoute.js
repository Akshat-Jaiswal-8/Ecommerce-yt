import express from "express";
import {
  forgotPasswordController,
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

// LOGIN || METHOD = POST

router.post("/login", loginController);

// FORGO PASSWORD || POST

router.post("/forgot-password", forgotPasswordController);

// test routes

router.get("/test", requireSignIn, isAdmin, testController);

// protected User route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
