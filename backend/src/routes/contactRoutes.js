import express from "express";

import { sendContactController } from "../controllers/contactControllers.js";

const router = express.Router();

router.post('/form', sendContactController);

export default router