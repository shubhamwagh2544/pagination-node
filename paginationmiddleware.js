export default function paginationResult(model) {
    return (req, res, next) => {
        const page = Number(req.query.page)
        const limit = Number(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const result = {}

        if (startIndex > 0) {
            result.previous = {
                page: page - 1,
                limit: limit
            }
        }

        if (endIndex < model.length) {
            result.next = {
                page: page + 1,
                limit: limit
            }
        }

        result.result = model.slice(startIndex, endIndex)

        res.paginatedResults = result
        next()
    }
}