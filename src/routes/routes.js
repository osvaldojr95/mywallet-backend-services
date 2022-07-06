import { Router } from "express";

import userRouter from "./userRouter.js";
import eventRouter from "./eventRouter.js";

const router = Router();

router.use(userRouter);
router.use(eventRouter);

export default router;