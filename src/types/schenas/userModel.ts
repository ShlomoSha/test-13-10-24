import mongoose, { Schema } from "mongoose"
import IUser from "../interfaces/iuser"
import validator from 'validator'
import gradesSchema from "./gradesModel"

const userScheba: Schema<IUser> = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [true, "What is you'r name?"]
    },
    email: {
        type: String,
        unique: true,
        validate: [validator.isEmail, 'invalid email'],
        required: [true, 'You must declare email']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'You must declare password']
    },
    class: {
        type: String,
        required: [true, 'Where you learn?']
    },
    grades: [
        {type: gradesSchema}
    ]
})

const UserModel: mongoose.Model<IUser> = mongoose.model('users', userScheba)

export default UserModel