import express from "express";
import { Router, Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.send("Testando!");
});

server.listen(3000, () => {
  console.log("Server runing...");
});
