import express from 'express'
const app = express()

const users = [
    { id: 1, name: 'this is id 1' },
    { id: 2, name: 'this is id 2' },
    { id: 3, name: 'this is id 3' },
    { id: 4, name: 'this is id 4' },
    { id: 5, name: 'this is id 5' },
    { id: 6, name: 'this is id 6' },
    { id: 7, name: 'this is id 7' },
    { id: 8, name: 'this is id 8' },
    { id: 9, name: 'this is id 9' },
    { id: 10, name: 'this is id 10' },
    { id: 11, name: 'this is id 11' },
    { id: 12, name: 'this is id 12' },
    { id: 13, name: 'this is id 13' },
    { id: 14, name: 'this is id 14' },
    { id: 15, name: 'this is id 15' },
    { id: 16, name: 'this is id 16' },
    { id: 17, name: 'this is id 17' },
    { id: 18, name: 'this is id 18' },
    { id: 19, name: 'this is id 19' },
    { id: 20, name: 'this is id 20' }
]

app.get('/', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000, function handler() {
    console.log('server started on 3000')
})