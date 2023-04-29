"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const shopping_cart_1 = require("./routes/shopping-cart");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json({ limit: "50mb", type: "application/json" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1/image", express_1.default.static(path_1.default.join(__dirname, 'public/images')));
app.use("/api/v1/shopping-cart", shopping_cart_1.router);
app.listen(port || 3000, () => {
    console.log(`server running : http://localhost:${port}`);
});
