import express from "express";

//controller
import { getNews } from "../controller/news-controller.js";

const router = express.Router();

router.get("/news", getNews);

export default router;
