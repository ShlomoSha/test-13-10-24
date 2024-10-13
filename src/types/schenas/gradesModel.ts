import mongoose, { Schema } from "mongoose"
import IGrade from "../interfaces/igrade"

const gradesSchema: Schema<IGrade> = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, 'What is subject it?']
    },
    create_at: {
        type: Date, 
        default: Date.now    
    },
    grade: {
        type: Number,
        required: [true, 'You missing something']
    }
})

export default gradesSchema