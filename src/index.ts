import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';

import { router as shoppingCartRoutes } from "./routes/shopping-cart";
import bodyParser from "body-parser";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

app.use("/api/v1/shopping-cart", shoppingCartRoutes);

app.listen(port || 3000, () => {
  console.log(`server running : http://localhost:${port}`);
});
