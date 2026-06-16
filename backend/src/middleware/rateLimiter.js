import { rateLimit } from "express-rate-limit";

export const contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,

    message: {
        success: false,
        message: 'Too many messages sent. Please wait a few minutes before trying again.',
    },

    standardHeaders: true,
    legacyHeaders: false
})