import { Md5 } from 'ts-md5';

import prismaClient from '../prisma';

class CreateUserService{
    async execute(user:any){
        var md5 = new Md5();

        md5.appendStr('hotelSystem')
        .appendStr('userRegister')
        .appendStr(user.password)

        var newUser = await prismaClient.user.create({
            data: {
                email: user.email,
                fullName: user.fullName,
                userName: user.userName,
                password: md5.end() as string,
            },
            select:{
                password: false,
                email: true,
                fullName: true,
                userName: true,
            }
        })

        return newUser;
    }
}

export {CreateUserService}