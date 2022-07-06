import jwt from "jsonwebtoken";
import { getEvents, insertEvent } from "../repositories/eventRepository.js";
import { getUserByToken } from "../services/eventServices.js";

export async function postEvent(req, res) {
    const { token, value, type } = res.locals.body;
    const user = getUserByToken(token);

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        throw {
            type: "unprocessableEntity"
        }
    }

    if (value < 0) {
        throw {
            type: "unprocessableEntity"
        }
    }

    insertEvent(user, value, type);
    res.sendStatus(201);
}

export async function getEvent(req, res) {
    const { token } = res.locals.body;
    const user = getUserByToken(token);
    const events = getEvents(user);
    res.send(events.rows);
}

export async function getSum(req, res) {
    const { token } = res.locals.body;
    const user = getUserByToken(token);
    const events = getEvents(user);
    const sum = getSum(events);
    res.send({ sum });
}