import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponse, middlewareMetricsInc } from "./api/middleware.js";
import { handlerResetMetrics } from "./admin/reset.js";
import { chirpyAdminMetrics } from "./admin/metrics.js";

const app = express();
const PORT = 8080;

app.use("/app", middlewareMetricsInc, express.static("./src/app"));
app.get('/api/healthz', handlerReadiness);
app.get('/admin/metrics', chirpyAdminMetrics);
app.get('/admin/reset', handlerResetMetrics);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(middlewareLogResponse);
