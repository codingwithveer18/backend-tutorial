// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import DBConnect from "./db/index.js";

dotenv.config({ path: "./env" });

const port = process.env.PORT || 5000;
DBConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running at : ${port}`);
    });
  })
  .catch((err) => {
    "Connection Error :", err;
  });
