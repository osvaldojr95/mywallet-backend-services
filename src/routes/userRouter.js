import { Router } from "express";
import { signUp, signIn } from "./../controllers/userController.js";
import { signUpValidation, signInValidation } from "./../middlewares/userMiddleware.js";

const router = Router;

router.post("/sign-up", signUpValidation, signUp);

router.post("/sign-in", signInValidation, signIn);

export default router;