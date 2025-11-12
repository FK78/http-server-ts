import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponse, middlewareMetricsInc } from "./api/middleware.js";
import { handlerPrintHits } from "./api/metrics.js";
import { handlerResetMetrics } from "./api/reset.js";

const app = express();
const PORT = 8080;

app.use("/app", middlewareMetricsInc, express.static("./src/app"));
app.get('/healthz', handlerReadiness);
app.get('/metrics', handlerPrintHits);
app.get('/reset', handlerResetMetrics);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(middlewareLogResponse);
