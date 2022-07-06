import { insertUser } from "./../repositories/userRepository.js";
import { duplicateUser, encryptPassword, generateToken, existingUser, verifyPassword } from "../services/userServices.js";

export async function signUp(req, res) {
    const { name, email, password } = res.local.body;
    duplicateUser(email);
    const hashedPassword = encryptPassword(password);
    insertUser(name, email, hashedPassword);
    res.sendStatus(201);
}

export async function signIn(req, res) {
    const { email, password } = res.locals.body;
    const user = existingUser(email);
    verifyPassword(user, password);
    const token = generateToken(user.id);
    res.send({ token });
}