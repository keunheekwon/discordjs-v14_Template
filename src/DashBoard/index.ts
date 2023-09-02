import express, { Request, Response } from "express";
import { Logger } from "../Function/Function";
const app = express();

export default function Server(port: number) {
  app.listen(port, () => {
    Logger("http://localhost:3000 서버 온라인");
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Discord-Bot : Oneline");
  });
}
