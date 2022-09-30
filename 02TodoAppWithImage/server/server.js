import express from "express";

import mongoose from "mongoose";
import { PORT, mongoUri } from "./config";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
