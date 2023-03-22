

class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const cerateCustomError =(msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}
//hello 

module.exports = { CustomAPIError, cerateCustomError}