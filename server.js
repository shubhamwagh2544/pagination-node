import express from 'express'
import { posts, users } from './data.js'
import paginationResult from './paginationmiddleware.js'
import connectAndSeedDatabase from './db.js'
import User from './user.js'
const app = express()

// connect and seed data
connectAndSeedDatabase()
    .catch(err => console.log('error seeding db: ', err))

// user api
app.get('/users', paginationResult(User), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

// post api
app.get('/posts', paginationResult(posts), (req, res) => {
    res.status(200).json(res.paginatedResults)
})

// server start
app.listen(3000, function handler() {
    console.log('server started on 3000')
})