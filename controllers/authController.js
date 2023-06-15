import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import UserModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, question } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required." });
    }
    if (!email) {
      return res.send({ message: "Email is Required." });
    }
    if (!password) {
      return res.send({ message: "password is Required." });
    }
    if (!phone) {
      return res.send({ message: "phone is Required." });
    }
    if (!address) {
      return res.send({ message: "address is Required." });
    }
    if (!question) {
      return res.send({ message: "answer is Required." });
    }

    // checking user
    const existingUser = await userModel.findOne({ email });

    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered please login.",
      });
    }

    // register user

    const hashedPassword = await hashPassword(password);

    const user = await new UserModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      question,
    }).save();

    res.status(201).send({
      success: true,
      message: "user registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
    });
  }
};

// POST | LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation

    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid user",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }

    //TOKEN

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login Failed",
      error,
    });
  }
};

// FORGOT PASSWORD CONTROLLER

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, question, newPassword } = req.body;

    if (!email) {
      res.status(400).send({ message: "Email is required!" });
    }
    if (!question) {
      res.status(400).send({ message: "question is required!" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "newPassword is required!" });
    }

    // check user
    const user = await userModel.findOne({ email, question });

    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or answer",
      });
    }

    const hashed = await hashPassword(newPassword);

    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      res.status(401).send({
        success: false,
        message: "unauthorised access",
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
};
