import express from "express";
import {
  addSlot,
  getSlots,
  parkVehicle,
  removeVehicle
} from "../controllers/slotController.js";

const router = express.Router();

router.post("/add", addSlot);
router.get("/", getSlots);
router.post("/park", parkVehicle);
router.post("/remove", removeVehicle);

export default router;
