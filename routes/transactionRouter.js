import express from "express";
import { getByYearMonth, insert, update, remove } from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/", getByYearMonth);
router.post("/", insert);
router.put("/", update);
router.delete("/", remove);

export default router;