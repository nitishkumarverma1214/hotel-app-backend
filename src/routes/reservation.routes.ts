import express from "express";
import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservationById,
  updateReservation,
} from "../controller/reservation.controller";

const router = express.Router();

router.get("", getReservation);
router.get("/:reservationId", getReservationById);
router.post("", createReservation);
router.put("/:reservationId", updateReservation);
router.delete("/:reservationId", deleteReservation);

export default router;
