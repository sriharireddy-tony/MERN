
const ErrorHandler = (obj, req, res, next) => {
    console.log("Middleware Error Hadnling");
    const statusCode = obj.statusCode || 500;
    const errMsg = obj.message || 'Something went wrong';
    if(process.env.NODE_ENV === 'production'){
        return res.status(statusCode).json({
            success: [200,201,204].some(a=> a === obj.statusCode) ? true : false,
            status: statusCode,
            message: errMsg,
            stack: obj.stack 
        })
    } else if(process.env.NODE_ENV === 'development'){
        return res.status(statusCode).json({
            success: [200,201,204].some(a=> a === obj.statusCode) ? true : false,
            status: statusCode,
            message: errMsg,
            data: obj.data 
        })
    }
}

module.exports = ErrorHandler;



// const ErrorHandler = (err, req, res, next) => {
//     console.log("Middleware Error Hadnling");
//     const errStatus = err.statusCode || 500;
//     const errMsg = err.message || 'Something went wrong';
//     res.status(errStatus).json({
//         success: false,
//         status: errStatus,
//         message: errMsg,
//         stack: process.env.NODE_ENV === 'development' ? err.stack : {}
//     })
// }
