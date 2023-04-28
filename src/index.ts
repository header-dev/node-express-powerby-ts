import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv";


import { router as shoppingCartRoutes } from "./routes/shopping-cart";
import bodyParser from "body-parser";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/v1/shopping-cart", shoppingCartRoutes);

app.listen(port || 3000, () => {
  console.log(
    `server running : http://localhost:${port}`
  );
});
