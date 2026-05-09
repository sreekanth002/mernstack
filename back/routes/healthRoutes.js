 import express from "express";
import {
  getHealth,
  healthCheckup,
  addDirector,
  deleteDirector
} from "../controllers/healthController.js";

const router = express.Router();

router.get("/", getHealth);
router.get("/checkup", healthCheckup);
router.post("/add", addDirector);

// ✅ FIXED HERE
router.delete("/delete/:name", deleteDirector);

export default router;