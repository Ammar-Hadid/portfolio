import "dotenv/config"
import express from "express";
import cors from "cors";

import contactRouter from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5137'
app.use(cors({
    origin: CLIENT_URL
}))

app.use('/api/contact', contactRouter);

export default app;
