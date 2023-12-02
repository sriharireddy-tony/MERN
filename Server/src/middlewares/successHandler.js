

const SuccessHandler = (Code,MSG, Data) =>{
    return (req,res,next) => {
        return res.status(Code).json({
          success: true,
          status:Code,
          message: MSG,
          data: Data
        });
      };
};

module.exports = SuccessHandler;