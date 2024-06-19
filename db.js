import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './user.js'
dotenv.config()

export default async function connectAndSeedDatabase() {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log('mongodb connected'))

        const db = mongoose.connection
        db.once('open', async () => {
            if (await User.countDocuments().exec() > 0) return;

            // seed some users data
            const users = [
                { id: 1, name: 'this is user id 1' },
                { id: 2, name: 'this is user id 2' },
                { id: 3, name: 'this is user id 3' },
                { id: 4, name: 'this is user id 4' },
                { id: 5, name: 'this is user id 5' },
                { id: 6, name: 'this is user id 6' },
                { id: 7, name: 'this is user id 7' },
                { id: 8, name: 'this is user id 8' },
                { id: 9, name: 'this is user id 9' },
                { id: 10, name: 'this is user id 10' },
                { id: 11, name: 'this is user id 11' },
                { id: 12, name: 'this is user id 12' },
                { id: 13, name: 'this is user id 13' },
                { id: 14, name: 'this is user id 14' },
                { id: 15, name: 'this is user id 15' },
                { id: 16, name: 'this is user id 16' },
                { id: 17, name: 'this is user id 17' },
                { id: 18, name: 'this is user id 18' },
                { id: 19, name: 'this is user id 19' },
                { id: 20, name: 'this is user id 20' }
            ]

            for (let user of users) {
                await User.create(user)
            }

            console.log('user data seeded...')
        })
    }
    catch (err) {
        console.log('error while connecting mongodb', err)
    }
}