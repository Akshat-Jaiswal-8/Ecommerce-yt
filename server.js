import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";

// configure dotenv
dotenv.config();

//database config
connectDb();
// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
// rest api

app.use("/", (req, res) => {
  res.send({
    message: "welcome to the ecommerce app",
  });
});

// PORT

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
