import { Request, Response } from "express";
import { configObject } from "../config.js";

export async function handlerResetMetrics(
  _: Request,
  res: Response,
) {
  configObject.fileserverHits = 0;
  res.write("Hits reset to 0");
  res.end();
}