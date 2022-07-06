import "./setup.js";
import cors from "cors";
import express from "express";
import routes from "./routes/routes.js";
import handleError from "./middlewares/handleError.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is listening on port ${port}.`);
});