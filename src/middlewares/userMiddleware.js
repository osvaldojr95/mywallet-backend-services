export function signUpValidation(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.sendStatus(422);
    }

    res.locals.body = { name, email, password };
}

export function signInValidation(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.sendStatus(422);
    }

    res.locals.body = { email, password };
}