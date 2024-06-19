export default function paginationResult(model) {
    return async (req, res, next) => {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const result = {}

        if (startIndex > 0) {
            result.previous = {
                page: page - 1,
                limit: limit
            }
        }

        try {
            const count = await model.countDocuments().exec()
            if (endIndex < count) {
                result.next = {
                    page: page + 1,
                    limit: limit
                }
            }

            // result.result = model.slice(startIndex, endIndex)        // for static data

            result.result = await model.find().sort({ id: 1 }).limit(limit).skip(startIndex).exec()
            res.paginatedResults = result
            next()
        }
        catch (err) {
            console.log('err', err)
            return res.status(500).json({
                message: err.message
            })
        }

    }
}