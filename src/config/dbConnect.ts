import mongoose from "mongoose"

export const connectToMongo = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_PATH!)
        console.log('success connected to MongDB')
    } catch (err) {
        console.log(err)
    }
}

