import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath to handle ES module paths
import checkoutRouter from "./routes/pay_u.route.js";
import ApiError from "./utils/ApiError.js";
import globalErrorHandler from "./utils/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Convert import.meta.url to a filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let publicFolder = path.join(__dirname, "public");

app.use(express.json());
app.use(cors());
app.use(express.static(publicFolder));

// Home Page handle
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(publicFolder, "index.html"));
});

app.use("/", checkoutRouter);

// Bad URL Handle
app.use("*", (err, req, res, next) => {
  next(
    new ApiError(
      "Can't find requested URL " + req.originalUrl + " on the server",
      404
    )
  );
});

app.use(globalErrorHandler);

// Server Running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// unhandledRejection
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection Error", err);
  app.close(() => {
    process.exit(1);
  });
});

// uncaughtException
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception! Shutting down...", err);
  process.exit(1);
});
