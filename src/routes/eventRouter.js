import { Router } from "express";
import { getEvent, postEvent } from "./../controllers/eventController.js"
import { tokenValidation, infoValidation } from "../middlewares/eventMiddleware.js";

const router = Router;

router.post("/financial-events", tokenValidation, infoValidation, postEvent);

router.get("/financial-events", tokenValidation, getEvent);

router.get("/financial-events/sum", tokenValidation, getSum);

export default router;