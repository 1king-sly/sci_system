import bcrypt from 'bcrypt'
import prisma from "@/app/lib/prismadb"
import { NextResponse } from 'next/server'
 import { RoleType } from '@prisma/client'
 export async function POST(request:Request) {
    try{
        const body=await request.json()
        const{
            email,
            firstName,
            secondName,
            password,
            
        } = body


        if(!email || !firstName || !secondName || !password){
            return new NextResponse('Missing info', {status:400})
        }

        const hashedPassword = await bcrypt.hash(password,12)

        const userName = firstName + " " + secondName

        const user = await prisma.user.create({
            data: {
                email:email,
                userName:userName,
                hashedPassword:hashedPassword,
                role: 'Member'     
            },
        });
        

        return NextResponse.json(user)
    }
    catch(error:any){
        console.log(error, "REGISTRATION")
        return new NextResponse('Internal Error', {status:500})
    }
 }