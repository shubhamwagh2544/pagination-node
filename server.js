import express from 'express'
import { WebSocketServer, WebSocket } from 'ws'
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
const server = app.listen(3000, function handler() {
    console.log('server started on 3000')
})

// create websocket server
const wss = new WebSocketServer({ server: server })

// connection event
wss.on('connection', function (ws) {
    console.log('new client connected to ws server')
    ws.on('message', function (message) {
        console.log('message received %s', message)
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                ws.send(message, { binary: false })
            }
        })
    })
    ws.on('close', function () {
        console.log('client disconnected')
    })
    ws.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });
})