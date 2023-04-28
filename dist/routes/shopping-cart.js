"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    const url_prefix = `http://localhost:${process.env.PORT}/public/images/products/`;
    const detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    let data = [
        {
            "id": 1001,
            "name": 'iPhone',
            'price': 35000,
            'detail': detail,
            'imgUrl': url_prefix + 'iphone.jpg',
        },
        {
            "id": 1001,
            "name": 'iPad',
            'price': 45000,
            'detail': detail,
            'imgUrl': url_prefix + 'ipad.jpg',
        },
    ];
    res.status(200).json(data);
});
