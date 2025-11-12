import { NextFunction, Request, Response } from 'express';
import { configObject } from "../config.js";

export function middlewareLogResponse(req: Request, res: Response, next: NextFunction){
  res.on("finish", () => {
    if (res.statusCode != 200){
      console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`)
    }
  })
  next();
}

export function middlewareMetricsInc(
  _: Request,
  res: Response,
  next: NextFunction
) {
  res.on("finish", () => {
    configObject.fileserverHits++;
  });
  next();
}