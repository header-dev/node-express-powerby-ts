import { Router, Express, Request, Response } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  const url_prefix = `http://localhost:${process.env.PORT}/public/images/products/`;

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
      id: 1001,
      name: "iPad",
      price: 45000,
      detail: detail,
      imgUrl: url_prefix + "ipad.jpg",
    },
  ];

  res.status(200).json(data);
});
