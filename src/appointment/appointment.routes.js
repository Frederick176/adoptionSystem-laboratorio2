import { Router } from "express";
import { getAppointment, saveAppointment, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppointment)

router.put("/updateAppointment", updateAppointmentValidator, updateAppointment)

export default router;