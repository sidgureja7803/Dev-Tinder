const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
<<<<<<< Tabnine <<<<<<<
  /**//+
   * Establishes a connection to the MongoDB database using the provided configuration.//+
   *//+
   * @returns {Promise} A promise that resolves when the connection is established, or rejects if the connection fails.//+
   *//+
   * @example//+
   * connectDB()//+
   *   .then(() => {//+
   *     console.log("Database connection established...");//+
   *   })//+
   *   .catch((err) => {//+
   *     console.error("Database cannot be connected!!");//+
   *   });//+
   *///+
  function connectDB() {//+
    // Implementation of the function goes here//+
  }//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"493b92ca-cb7a-49a3-b71b-04599e097250","source":"instruct"}
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
