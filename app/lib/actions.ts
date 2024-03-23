'use server';
import prisma from '@/app/lib/prismadb';
import slugify from 'slugify';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authUptions";
import { ClubType, EventType, RoleType, School, UserType,Level } from '@prisma/client';

const cron = require('node-cron');

const nodemailer = require('nodemailer');


export const addEvent = async (formData: FormData) => {


  try {
    const date = formData.get('date') as unknown as Date
    ;
    const venue = formData.get('venue') as unknown as string
    ;
    const speaker = formData.get('speaker') as unknown as string
    ;
    const host = formData.get('host') as unknown as string
    ;
    const poster = formData.get('poster') as unknown as string
    ;
    const time = formData.get('time') as unknown as string
    ;
    const desc = formData.get('desc') as unknown as string
    
    const title = formData.get('title') as unknown as string
    

    
    if (!date || !venue || !speaker || !host || !poster || !time || !desc || !title) {
      throw new Error('Required field is missing'); 
    }

    const newDate = date+''+'T00:00:00.000Z'

    const newTime = date+''+'T'+time+''+':00.000Z'

    const slug = slugify(title, { lower: true, strict: true });

    const timestamp = Date.now();
    const uniqueSlug = `${slug}-${timestamp}`;


    const user = await getServerSession(authOptions)

   
    if (user) {
      const userId = parseInt(user.id);
      const club = user.club as unknown 
      if(!club){
        console.error('Club missing')
      }
      const newEvent = await prisma.event.create({
        data:{
          title:title,
          createdById:userId,
          dateOfEvent:newDate,
          venue:venue,
          slug:uniqueSlug,
          timeOfEvent:newTime,
          speaker:speaker,
          host:host,
          poster:poster,
          type:EventType[club as keyof typeof club],
          desc:desc,
        }
      });
      revalidatePath('/');
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

export const addBlog = async (formData: FormData) => {
    console.log(formData)


  try {
    
   
    const poster = formData.get('poster') as unknown as string
    ;
  
    const desc = formData.get('desc') as unknown as string
    
    const title = formData.get('title') as unknown as string
    

    
    if ( !poster || !desc || !title) {
      throw new Error('Required field is missing'); 
    }

    const slug = slugify(title, { lower: true, strict: true });

    const timestamp = Date.now();
    const uniqueSlug = `${slug}-${timestamp}`;


    const user = await getServerSession(authOptions)

   
    if (user) {
      const userId = parseInt(user.id);
    
      const newBlog = await prisma.blog.create({
        data:{
          title:title,
          createdById:userId,
          slug:uniqueSlug,
          poster:poster,
          desc:desc,
        }
      });
      revalidatePath('/');
      if(newBlog){
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
            subject: "NEW BLOG CREATED", 
            text:` Hello ${userName}, A new blog has been posted of title:  ${title} check it out and have fun with tech `,
            html: `<b> Hello ${userName}, A new blog has been posted of title:  ${title} check it out and have fun with tech </b>`, 
          });
        })}
      }

      return newBlog
  
    }
  } catch (error) {
    console.error(error, 'Failed to create event');
    
  } finally {
    
    revalidatePath('/');
  }
};

export const fetchBlogs = async () =>{

  try{

    const blogs = await prisma.blog.findMany(
      {
        orderBy:{
          createdAt:'desc'
        },
        take:1
      }
    )
    return blogs

  }catch(error:any){
    console.error("Failed to fetch latest blog", error)
  }
 
}

export const fetchLatestBlogs = async (page: number, perPage: number) =>{
  try{

    const offset = (page - 1) * perPage;

    const blogs = await prisma.blog.findMany({
      orderBy:{
        createdAt:'desc'
      },
      take: perPage,
      skip:offset,
    })

    return blogs

  }catch(error:any){
    console.error('Error fetching latest blogs', error)
  }
}

export const fetchSingleBlog = async (slug:string) =>{
  try{
    const blog = await prisma.blog.findUnique({
      where:{
        slug:slug
      },
      include: {
        createdBy: true,
      },
    }) 

    
    if (blog) {
      await prisma.blog.update({
        where: {
          id: blog.id
        },
        data: {
          views: {
            increment: 1
          }
        }
      });
    }

    return blog

  }catch(error:any){
    console.error('Error fetching single Blog',error)
  }
}

export const fetchTrendingBlogs = async () =>{

  try{

    const blogs = await prisma.blog.findMany({
      orderBy:{
        views:'desc'
      },
      take:3
    })

    return blogs

  }catch(error:any){
    console.error('Error fecthing trending blogs',error)
  }
}

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

export const fetchSampleUpcomingEvents = async () => {
    try {
        const today = new Date();
        const events = await prisma.event.findMany({
            where: {
                dateOfEvent: {
                    gte: today
                }
            },
            take: 3,
            orderBy: {
                dateOfEvent: 'asc' 
            },
            include: {
                createdBy: true,
            }
        });
        return events;
    } catch (error) {
        console.error('Failed to fetch upcoming events', error);
        throw error;

    }
  }
export const fetchSampleClubUpcomingEvents = async (eventType: string) => {
    try {
        const today = new Date();
        const events = await prisma.event.findMany({
            where: {
                type: EventType[eventType as keyof typeof EventType],
                dateOfEvent: {
                    gte: today 
                }
            },
            orderBy: {
                dateOfEvent: 'asc' 
            }
            ,include:{
              createdBy:true,
            },
            take: 3
        });
        return events;
    } catch (error) {
        console.error('Failed to fetch specific Events', error);
        throw error;
    }
};

export const fetchSingleEvent = async (slug:string) =>{
  try{
    const event = await prisma.event.findUnique({
      where:{
        slug:slug
      }
    })
    return event
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

    return research

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



  const id = formData.get('userId' as unknown as string)
  const email = formData.get('email' as unknown as string)
  const role = formData.get('role' as unknown as string)
  const password = formData.get('password' as unknown as string)
  const image = formData.get('file' as unknown as string)
  const club = formData.get('club' as unknown as string)
  const school = formData.get('school' as unknown as string)
  const userType = formData.get('userType' as unknown as string)
  const level = formData.get('level' as unknown as string)

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
    if(userType !== null && userType !==''){
      data.userType = UserType[userType as keyof typeof UserType]
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

export const fetchStaff = async (page: number, perPage: number,query:string) => {
  const offset = (page - 1) * perPage;
  try {

    if(typeof query === 'string' && query.trim()){

      const staff = await prisma.user.findMany({
        where:{
          userName:{
            contains:query.trim()
          }
        },
        orderBy:{
          createdAt:'desc'
        }
      })
      return staff

    }
    const staff = await prisma.user.findMany({
      where: {
        userType: {
          in: [
            UserType.LECTURER,UserType.COD
          ],
        },
      },
      orderBy:{
        createdAt:'desc'
      },
      skip: offset,
      take: perPage,
    });


    return staff;
  } catch (error: any) {
    console.error('Failed to fetch Staff', error);
  }
};


export const fetchStudents = async (page: number, perPage: number,query:string) => {

  try {

    if(typeof query === 'string' && query.trim()){

      const student = await prisma.user.findMany({
        where:{
          userName:{
            contains:query.trim()
          }
        },
        orderBy:{
          createdAt:'desc'
        }
      })
      return student

    }

    const offset = (page - 1) * perPage;


    const students = await prisma.user.findMany({
      where: {
        userType: {
          in: [
            UserType.STUDENT,
            UserType.CLASSREP,
            UserType.SCHOOLREP,
            UserType.DEPUTYCLASSREP,
            UserType.DEPUTYSCHOOLREP,
          ],
        },
      },
      orderBy:{
        createdAt:'desc'
      },
      skip: offset,
      take: perPage,
    });


    return students;
  } catch (error: any) {
    console.error('Failed to fetch Students', error);
  }
};



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

