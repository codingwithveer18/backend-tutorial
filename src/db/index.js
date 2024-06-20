import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnect = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Connection Successful : ${connectInstance.connection.host}`);
  } catch (error) {
    console.log("ERROR: ", error);
    process.exit(1);
  }
};

export default DBConnect;
