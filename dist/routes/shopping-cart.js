"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.router = (0, express_1.Router)();
const url_prefix = `http://localhost:${process.env.PORT}/public/images/products/`;
const detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
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
exports.router.get("/", (req, res) => {
    res.status(200).json(data);
});
exports.router.post("/", (req, res) => {
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
    console.log(req.body);
    res.status(200).json(req.body);
});
