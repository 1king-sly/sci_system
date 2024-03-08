import NextAuth from "next-auth"

declare module "next-auth" {
  interface User{
    userName: string,
    role: string,
    email:string,
    id:string,
  }
  interface Session {
    user:User 
    userName: string,
    role: string,
    email:string,
    id:string,
    club:string,

    
  }

  interface ProjectFormData{
    schoolFromFormData:string,
    title:string,
    email:string,
    ans1:string,
    ans2:string, 
    ans3: string,
    ans4:string,
  }
}

