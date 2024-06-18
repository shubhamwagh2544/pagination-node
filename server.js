import express from 'express'
import { posts, users } from './data.js'
import paginationResult from './paginationmiddleware.js'
const app = express()


app.get('/users', paginationResult(users), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

app.get('/posts', paginationResult(posts), (req, res) => {
    res.status(200).json(res.paginatedResults)
})


app.listen(3000, function handler() {
    console.log('server started on 3000')
})