import dotenv from "dotenv";

dotenv.config();
import express from "express";
const app = express();

import cors from "cors";

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import paymentRouter from "../server/src/router/paymentRouter.js";

app.use("/api/payment", paymentRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
