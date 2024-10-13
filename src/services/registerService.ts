import IUser from "../types/interfaces/iuser"
import bcrypt from 'bcrypt'
import UserModel from "../types/schenas/userModel"

export const createTeacher = async (teacher: IUser): Promise<void> => {
    try {
        const { name, password, email, _class } = teacher

        const exist = await UserModel.findOne({name})
        if (exist) throw new Error('this teacher already exsits')

        const classExsit = await UserModel.findOne({role: 'teacher', _class})
        if(classExsit) throw new Error('this class already exsits')

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel ({
            name,
            password: hashedPassword,
            email,
            _class,
            role: 'teacher',
        })
        
        await newUser.save()
    } catch (err) {
        throw err
    }
}

export const createStudent = async (student: IUser): Promise<void> => {
    try {
        const exist = await UserModel.findOne({name: student.name})
    if (exist) {
        throw new Error('this student already exsits')
    }
    const { name, password, email, _class } = student

    const teacherClass = await UserModel.findOne({role: 'teacher', _class})
    if (!teacherClass) throw new Error('The class does not exist')
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new UserModel ({
        name,
        password: hashedPassword,
        email,
        _class,
        role: 'student'
    })
    await newUser.save()
    teacherClass.studentInClass!.push(newUser._id)
    teacherClass.save()
    } catch (err) {
        throw err
    }
}