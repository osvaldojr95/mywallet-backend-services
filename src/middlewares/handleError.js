export default async function handleError(error, req, res, next) {
    console.log(error.message);

    if (error.type && error.type === "notFound") {
        return res.sendStatus(404);
    } else if (error.type && (error.type === "unprocessableEntity" || error.type === "wrongData")) {
        return res.sendStatus(422);
    } else if (error.type && error.type === "permissionDenied") {
        return res.sendStatus(401);
    }
    return res.status(500).send(error.message);
}