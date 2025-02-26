import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./routes/main.routes";
import { notFoundRequest } from "./routes/errorHandler.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", mainRoutes);
app.use(notFoundRequest);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
