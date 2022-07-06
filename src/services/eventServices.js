import jwt from "jsonwebtoken";

export function getUserByToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export function getSum(events) {
    return events.rows.reduce(
        (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );
}