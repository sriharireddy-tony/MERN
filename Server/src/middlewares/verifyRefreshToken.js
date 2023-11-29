const SuccessHandler = require('./successHandler');
const jwt = require('jsonwebtoken');
require('dotenv').config();

verifyRefreshtoken = async (req, res, next) => {

    const refreshToken = req.body.token;
    const refreshSecretKey = process.env.REFRESH_KEY;

    if (!refreshToken) {
        return SuccessHandler(404, 'Refresh token not provided', [])(req, res)
    }

    try {
        const decodedToken = jwt.verify(refreshToken, refreshSecretKey);
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTimestamp) {
            return SuccessHandler(401, 'Refresh token has expired!', [])(req, res)
        }
        req.decodedRefreshToken = decodedToken;
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = verifyRefreshtoken;