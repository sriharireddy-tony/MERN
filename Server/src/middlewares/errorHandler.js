require('dotenv').config();

const ErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(statusCode).json({
                success: false,
                status: statusCode,
                message: errMsg,
                stack: process.env.NODE_ENV === 'development' ? err.stack : {}
            })
}

module.exports = ErrorHandler;