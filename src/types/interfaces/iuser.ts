import classSchema from "../schenas/classModel"

interface IUser {
    name: string
    email: string
    password: string
    _class: string
    role: string
    studentInClass?: [any]
    grades?: []
}

export default IUser