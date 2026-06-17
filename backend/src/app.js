import "dotenv/config"
import express from "express";
import cors from "cors";

import contactRouter from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());

const allowedOrigins = (
    process.env.CLIENT_URL || 'https://ammarhadid.com,https://www.ammarhadid.com'
)
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin(requestedOrigin, callback) {
        if (!requestedOrigin || allowedOrigins.includes(requestedOrigin)) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'), false);
    }
}))

app.use('/api/contact', contactRouter);

export default app;
