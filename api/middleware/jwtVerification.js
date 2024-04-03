const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtVerification = (req, res, next) => {
    const secret = process.env.JWT_SECRET

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({message:'no token'});
    } else {
        jwt.verify(token, secret, (err, payload) => {
            if (err && err.name !== 'TokenExpiredError') {
                return res.status(403).json({message: 'Invalid Token'});
            } else if (err && err.name === 'TokenExpiredError') {

                const decodedTokenPayload = jwt.decode(token)
                const newPayload = {
                    userId: decodedTokenPayload.userId,
                    username: decodedTokenPayload.username
                };

                // Création du nouveau token
                const newToken = jwt.sign(newPayload, secret, {expiresIn: '1d'});
                // Assignation du contenu du nouveau token dans le req.payload
                req.payload = newPayload;
                req.headers['authorization'] = `Bearer ${newToken}`;
                next();
            } else {
                req.payload = payload
                next();
            }
        })
    }
};

module.exports = jwtVerification;