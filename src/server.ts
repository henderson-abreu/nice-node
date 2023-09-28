import express from "express";
import { Router, Request, Response } from "express";
import * as main from "./index";

const server = express();
//console.log(main.fullName("Henderson", "Abreu Sales Silva"));
//console.log(main.calcX(20, 18));
//require("../modules/path");
//require("../modules/fs");

server.get("/", (req: Request, res: Response) => {
  res.send("Testando!");
});

server.listen(80, () => {
  console.log("Continuar a partir do 41 min 30 seg o vídeo do youtube!");
});
