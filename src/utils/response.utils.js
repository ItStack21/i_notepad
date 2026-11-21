const Response = {
    success(res, status, message, data) {
        return res.status(status).json({
            "success": true,
            "status_code": status,
            "message": message,
            "data": data
        })
    },

    error(res, status, message) {
        return res.status(status).json({
            "success": false,
            "status_code": status,
            "message": message,
        })
    }
}

export default Response;