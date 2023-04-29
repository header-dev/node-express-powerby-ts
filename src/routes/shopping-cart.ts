import { Router, Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
export const router = Router();

const url_prefix = `http://192.168.56.1:${process.env.PORT}/images/products/`;

const detail =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

let data = [
  {
    id: 1001,
    name: "iPhone",
    price: 35000,
    detail: detail,
    imgUrl: url_prefix + "iphone.jpg",
  },
  {
    id: 1002,
    name: "iPad",
    price: 45000,
    detail: detail,
    imgUrl: url_prefix + "ipad.jpg",
  },
];

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(data);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  let result = data.filter((item) => item.id === Number(id));

  if (!result.length) {
    res.status(404).json({ message: "data not found" });
  }

  res.status(200).json(...result);
});

router.post("/", (req: Request, res: Response) => {
  // const url_prefix = `http://localhost:${process.env.PORT}/public/images/products/`;

  // const detail =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  // let data = [
  //   {
  //     id: 1001,
  //     name: "iPhone",
  //     price: 35000,
  //     detail: detail,
  //     imgUrl: url_prefix + "iphone.jpg",
  //   },
  //   {
  //     id: 1001,
  //     name: "iPad",
  //     price: 45000,
  //     detail: detail,
  //     imgUrl: url_prefix + "ipad.jpg",
  //   },
  // ];

  data.push({ ...req.body, detail: detail, imgUrl: url_prefix + "ipad.jpg" });

  res.status(200).json(data);
});
