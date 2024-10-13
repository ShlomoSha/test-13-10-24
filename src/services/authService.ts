import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../types/schenas/userModel'
import IUser from '../types/interfaces/iuser'

export const loginTheCollage = async (user: IUser): Promise<string | void> => {
    try {
        const dbUser = await UserModel.findOne({name: user.name})

        if (!dbUser) throw new Error('user nor found')
        if (!(await bcrypt.compare(user.password, dbUser.password))){
            throw new Error('something wrong')
        }

        const token: string = await jwt.sign(
            {
                id: dbUser._id,
                name: dbUser.name,
                role: dbUser.role,
                class: dbUser._class
            },
            process.env.TOKEN_SECRET!, 
            {
                expiresIn: '10m'
            }
        )
        return token
    } catch (err) {
        throw err
    }
}