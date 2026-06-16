import express from "express";

import { sendContactController } from "../controllers/contactControllers.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post('/form', contactRateLimiter, sendContactController);

export default router