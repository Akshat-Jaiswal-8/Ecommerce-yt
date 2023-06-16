import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";
import categoryModel from "../models/CategoryModel.js";

export const createcategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(401)
        .send({ success: false, message: "Name is required." });
    }
    const existingCategory = await CategoryModel.findOne({ name });

    if (existingCategory) {
      return res
        .status(200)
        .send({ success: true, message: "category already exists" });
    }

    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Category added successfully",
      category,
    });
  } catch (err) {
    res.status(500).send({ success: false, err, message: "Error in category" });
  }
};

// update category controller

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      { new: true } // this parameter is passed to update the category otherwise it won't get updated
    );
    res.status(200).send({
      success: true,
      message: "category updated successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating the category",
    });
  }
};

export const CategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All categories listed",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error,
      message: "Error while fetching all the categories",
    });
  }
};

export const singleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await CategoryModel.findOne({ slug });
    res.status(200).send({
      success: true,
      message: "Successfully fetched the single Category",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error,
      message: "Error while fetching a single category",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Successfully deleted the Category",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error,
      message: "Error While deleting the category",
    });
  }
};
