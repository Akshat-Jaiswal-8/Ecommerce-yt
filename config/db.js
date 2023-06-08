import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongo db database ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
