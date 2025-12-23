import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import countriesRouter from "./routes/countries";

const app = express();

const PORT = Number(process.env.PORT ?? 4000);
const HOST = "0.0.0.0";

const ALLOWED_ORIGINS = new Set([
    "http://localhost:5173",
    "http://localhost:8080",
]);

app.disable("x-powered-by");

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) return callback(null, true);

            if (ALLOWED_ORIGINS.has(origin)) return callback(null, true);

            return callback(new Error("Not allowed by CORS"));
        },
    })
);

app.use(
    rateLimit({
        windowMs: 60_000,
        max: 120,
    })
);

app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
});

app.use("/api/countries", countriesRouter);

app.listen(PORT, HOST, () => {
    console.log(`Backend running on http://${HOST}:${PORT}`);
});
