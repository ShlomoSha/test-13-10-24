import mongoose, { Schema } from "mongoose"

const classSchema: Schema = new mongoose.Schema ({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default classSchema