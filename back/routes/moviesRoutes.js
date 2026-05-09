 import express from "express";
import { addMovie, getAllMovies } from "../controllers/moviesController.js";

const router = express.Router();

router.get("/", getAllMovies);
router.post("/add", addMovie);

export default router;