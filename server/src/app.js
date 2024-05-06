import express, { json } from "express";
import contactRoute from "./routes/contact.js"
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello mongoose");
});

//api routes
app.use("/api/contact", contactRoute)

// no api route error
app.use((req, res, next) => {
  next(createHttpError(404, "End point not found"));
});

// general and specific error
app.use((req, res, next) => {
  console.log(error);
  let errorMessage = "An unknown error has occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;