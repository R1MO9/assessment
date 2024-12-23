const errorResponseHandlers = (res, err, statusCode = 500) => {
    console.error(err);
    return res.status(statusCode).json({
        success: false,
        error: err.message || 'An unexpected error occurred.',
    });
};

export default errorResponseHandlers;