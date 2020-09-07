import express from "express";
import { getAll } from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/", getAll);

export default router;