const SuccessHandler = require('./successHandler');
const jwt = require('jsonwebtoken');
require('dotenv').config();

verifyAccessToken = async (req, res, next) => {

    if (!req.headers.authorization) {
        return SuccessHandler(404, 'Access token not provided', [])(req, res)
    }

    const accessToken = req.headers.authorization.split(' ')[1];
    const accessSecretkey = process.env.ACCESS_KEY;

    // try {
        const decodedToken = jwt.verify(accessToken, accessSecretkey);
        console.log(decodedToken);
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTimestamp) {
            return SuccessHandler(401, 'Access token has expired!', [])(req, res)
        }
        req.decodedRefreshToken = decodedToken;
        next();
    // } catch (err) {
    //     next(err)
    // }
}

module.exports = verifyAccessToken;