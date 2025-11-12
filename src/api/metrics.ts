import { Request, Response } from "express";
import { configObject } from "../config.js";

export function handlerPrintHits(_: Request, res: Response){
    res.send(`Hits: ${configObject.fileserverHits}`);
}