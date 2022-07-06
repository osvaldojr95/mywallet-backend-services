import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "./../repositories/userRepository.js"
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export function duplicateUser(email) {
    const existingUsers = findUserByEmail(email);

    if (existingUsers.rowCount > 0) {
        throw {
            type: "notFound"
        }
    }
}

export function encryptPassword(password) {
    return bcrypt.hashSync(password, 12);
}

export function generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export function existingUser(email) {
    const existingUser = findUserByEmail(email);

    if (existingUser.rowCount === 0) {
        throw {
            type: "userExist"
        }
    }

    return existingUser[0];
}

export function verifyPassword(user, password) {
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {
            type: "permissionDenied"
        }
    }
}