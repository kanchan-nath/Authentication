const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        console.error("mongoDB connection failed !!!", error)
        process.exit(1)
    }
}

export {asyncHandler}