"use strict";
// import * as express from "express";
// import * as bodyParser from "body-parser";
// import routes from "./routes";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // applying the routes to the basepath '/api'
// app.use("/api", routes);
// const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`);
// });
// // http://localhost:3000/api/product
const app_1 = __importDefault(require("./app"));
// get the port from the environment variable or use 3000
const port = 3000;
app_1.default.listen(port, () => console.log(`App is listening on http://localhost:${port}`));
