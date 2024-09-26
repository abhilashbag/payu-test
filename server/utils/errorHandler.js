const globalErrorHandler = (err, req, res, next) => {
  if (!err.stack) {
    Error.captureStackTrace(err, err.constructor);
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      err: err,
    });
  } else if (process.env.NODE_ENV === "production") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.isOperational ? err.message : "Something went very wrong!",
    });
  }
};

export default globalErrorHandler;
