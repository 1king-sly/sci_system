'use server';
import prisma from '@/app/lib/prismadb';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authUptions";
import { ClubType, EventType, RoleType, School, UserType,Level } from '@prisma/client';

const cron = require('node-cron');

const nodemailer = require('nodemailer');


export const addEvent = async (formData: any) => {
  try {
    const eventType = formData.eventType
    const date = formData.date;
    const venue = formData.venue;
    const speaker = formData.speaker;
    const host = formData.host;
    const poster = formData.poster;
    const time = formData.time;
    const desc = formData.desc
    const title = formData.title

    
    if (!eventType || !date || !venue || !speaker || !host || !poster || !time || !desc || !title) {
      throw new Error('Required field is missing'); 
    }


    const user = await getServerSession(authOptions)
   
    if (user) {
      const userId = parseInt(user.id);
      const newEvent = await prisma.event.create({
        data:{
          title:title,
          createdById:userId,
          dateOfEvent:date,
          venue:venue,
          timeOfEvent:time,
          speaker:speaker,
          host:host,
          poster:poster,
          type:EventType[eventType as keyof typeof EventType],
          desc:desc,
        }
      });
      revalidatePath('/');
      // revalidatePath('/');

      if(newEvent){
        const users = await fetchUsers()
        {users?.map(async (user)=>{
          const email = user.email
          const userName = user.userName
          const transporter:any = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            tls: {
              ciphers: "SSLv3",
              rejectUnauthorized: false,
          },
            secure: false, 
            auth: {
              user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
              pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
          });
    
          const info = await transporter.sendMail({
            from: {
              name:'Byrone Kinsly',
              address:process.env.NEXT_PUBLIC_PERSONAL_EMAIL
            }, 
            to: email, 
            subject: "NEW EVENT UPDATE", 
            text:` Hello ${userName}, A new event has been scheduled for ${date} at ${time} hosted by ${host}. The speaker will be ${speaker} venue is at ${venue}. Purpose to attend kindly`,
            html: `<b>Hello ${userName}, A new event has been scheduled for ${date} at ${time} hosted by ${host}. The speaker will be ${speaker} venue is at ${venue}. Purpose to attend kindly</b>`, 
          });
        })}
      }
      return newEvent
  
    }
  } catch (error) {
    console.error(error, 'Failed to create event');
    
  } finally {
    
    revalidatePath('/');
  }
};


export const createUser = async (formData:any)=>{
  const firstName = formData.firstName
  const secondName = formData.secondName
  const email = formData.email
  const password = formData.password
  const role = formData.role
  const club = formData.club

  if(!firstName|| !secondName || !email || !password || !club || !role){
    throw new Error('Required field is missing'); 

  }

  const userName = firstName + " " + secondName
  const hashedPassword = await bcrypt.hash(password,12)

  try{
    const user = await prisma.user.create({
      data:{
        userName:userName,
        email:email,
        role:RoleType[role as keyof typeof RoleType],
        club:ClubType[club as keyof typeof ClubType],
        hashedPassword:hashedPassword,
      }
    })

    return user

  }catch(error:any){
    console.error('Error creating user', error)
  }

}



export const createProject = async (formData:any)=>{
  const title= formData.title
  const ans1 = formData.ans1
  const ans2 = formData.ans2
  const ans3 = formData.ans3
  const ans4 = formData.ans4

  if(!title|| !ans1 || !ans2 || !ans3 || !ans4){
    throw new Error ('Required field is missing')

  }

  try{

    const user = await getServerSession(authOptions)
    if(!user){
      throw new Error('User not authenticated')
    }

    const userId =parseInt(user.id)

    const research = await prisma.research.create({
      data:{
        userId:userId,
        title:title,
        ans1:ans1,
        ans2:ans2,
        ans3:ans3,
        ans4:ans4,
        status:'PENDING'
      }
    })

    return research

  }catch(error:any){
    console.error('Failed to create Research')
  }
}

export const fetchUsers = async () =>{
  try{

    const users = prisma.user.findMany()
    return users

  }catch(error:any){
    console.error('Failed to fetch users',error)
  }
}

export const fetchSampleUpcomingEvents = async () =>{
   
     try{
      const events = await prisma.event.findMany({
        orderBy:{
          dateOfEvent:'desc'
        },
        take:3
       })
       return events
     }catch(error:any){
      console.error('Failed to fetch upcoming events', error)
     }
}
export const fetchSampleClubUpcomingEvents = async (eventType:string) =>{
    try{

      const events = await prisma.event.findMany({
        where:{
          type:EventType[eventType as keyof typeof EventType]
        },
        orderBy:{
          dateOfEvent:'desc'
        },
        take:3
      })

      return events

    }catch(error:any){
      console.error('Failed to fetch specific Events')
    }
}

export const fetchSingleEvent = async (id:string) =>{

  try{
    const event = await prisma.event.findUnique({
      where:{
        id:parseInt(id)
      }
    })
  }catch(error:any){
    console.error('Failed to fetch Single Event',error)
  }

}

export const fetchSingleUser = async (id:string) =>{
  if(!id){
    throw new Error ('Id is missing')
  }
  try{

    const user = await prisma.user.findUnique({
      where:{
        id:parseInt(id)
      }
    })

    return user

  }catch(error:any){
    console.error('Failed to fetch single user')
  }
}

export const fetchSingleResearch = async (id:string) =>{
  if(!id){
    throw new Error('Research Id is missing')
  }
  try{

    const research = await prisma.research.findUnique({
      where:{
        id:parseInt(id)
      }
    })

  }catch(error:any){
    console.error("Failed to fetch Single Research",error)
  }
}

export const fetchResearchs = async (query:string) =>{
  try{
    if(typeof query === 'string' && query.trim()){

      const researchs = await prisma.research.findMany({
        where:{
          title:{
            contains: query.trim()
          }
        },
        orderBy:{
          createdAt:'desc'
        }
  
      })
      return researchs
  
    }
  
    const researchs = await prisma.research.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
  
    return researchs 
  }catch(error:any){
    console.error("Failed to fecth researchs")
  }
}

export const updateUser = async(formData:any) =>{
  if(!formData){
    throw new Error('Empty field passed')
  }
  const id = formData.id
  const email = formData.email
  const role = formData.role
  const password = formData.password
  const image = formData.image
  const club = formData.club
  const school = formData.school
  const studentType = formData.studentType
  const level = formData.level

  try{
    const data: Record<string, string> = {};

    if (email !== null && email !== '') {
      data.email = email;
    }
    if (school !== null && school !== '') {
      data.school = School[school as keyof typeof School];

    }
   

    if (role !== null && role !== '') {
      data.role = RoleType[role as keyof typeof RoleType];
    }
    if(image !== null && image !==''){
      data.image = image
    }
    if(club !== null && club !==''){
      data.club = ClubType[club as keyof typeof ClubType]
    }
    if(studentType !== null && studentType !==''){
      data.studentType = UserType[club as keyof typeof UserType]
    }
    if(level !== null && level !==''){
      data.level = Level[club as keyof typeof Level]
    }

    if (password !== null && password !== '') {
      data.hashedPassword = await bcrypt.hash(password, 12);
    }

    const updateduser = await prisma.user.update({
      where:{
        id:parseInt(id)
      },
      data:data

    })

    return updateduser


  }catch(error:any){
    console.error('Failed to update user', error)
  }
}

export const fetchLeads = async (club:string) =>{
  if(!club){
    throw new Error ("Club missing")
  }
  try{
    const leads = await prisma.user.findMany({
      where:{
        club:ClubType[club as keyof typeof ClubType],
        role:{
          in:[RoleType.Lead,RoleType.CoLead,RoleType.CoTeam]
        }
      },
    })
    return leads

  }catch(error:any){
    console.error('Failed to fetch Leads')
  }

}

export const fetchClassReps = async () =>{
 

  try{

    const reps = await prisma.user.findMany({
      where:{
        userType:{
          in:[UserType.CLASSREP,UserType.DEPUTYCLASSREP]
        }
      },
    })



    return reps

  }catch(error:any){
    console.error('Failed to fetch class representatives',error)
  }
}

export const fetchStaff = async () =>{
 

  try{

    const reps = await prisma.user.findMany({
      where:{
        userType:{
          in:[UserType.LECTURER]
        }
      },
    })

    return reps

  }catch(error:any){
    console.error('Failed to Staff',error)
  }
}



export const fetchSchoolReps = async () =>{
    try{
      const reps = await prisma.user.findMany({
        where:{
          userType:{
            in:[UserType.SCHOOLREP,UserType.DEPUTYSCHOOLREP]
          }
        },
      })



      return reps

    }catch(error:any){
      console.error('Failed to fetch student representatives',error)
    }
}

export const fetchPatron = async () =>{
  try{
    const patron = await prisma.user.findMany({
      where:{
        role:RoleType.Patron
      }
    })

    return patron

  }catch(error:any){
    console.error('Failed to fetch patron')
  }
}

