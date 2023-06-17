import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../controllers/authController.js";
import formidable from "express-formidable";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
} from "../controllers/productController.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get one product

router.get("/get-product/:id", getSingleProductController);

// get all products

router.get("/get-products", getProductController);

//delete products

router.delete("/delete-product/:pid", deleteProductController);
export default router;
