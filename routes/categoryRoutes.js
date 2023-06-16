import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../controllers/authController.js";
import {
  CategoryController,
  createcategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/CategoryController.js";

const router = express.Router();

//routes

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createcategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get-all category
router.get("/get-category", CategoryController);

//get-single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
