export function tokenValidation(req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        throw {
            type: "permissionDenied"
        }
    }

    res.locals.body = { token };
}

export function infoValidation(req, res) {
    const { value, type } = req.body;

    if (!value || !type) {
        throw {
            type: "wrongData"
        }
    }

    res.locals.body = { value, type };
}