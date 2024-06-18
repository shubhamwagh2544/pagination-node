import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userschema)

export default User