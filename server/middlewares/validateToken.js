import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    console.log(req.headers, "headers"); // Imprime los encabezados para verificar si el token está ahí
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    // Elimina 'Bearer ' del token si está presente
    const tokenWithoutBearer = token.replace('Bearer ', '');

    jwt.verify(tokenWithoutBearer, TOKEN_SECRET, (err, decodedToken) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        console.log(decodedToken, "en auth");
        const userId = decodedToken._id;

        req.user = decodedToken;
        next();
    });
};