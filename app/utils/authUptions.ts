import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/app/lib/prismadb';
import {  RoleType,UserType,School,ClubType,Level } from '@prisma/client';
import NextAuth from 'next-auth';

type User = {
  id: string;
  userName: string;
  hashedPassword: string;
  email: string;
  role: RoleType;
  createdAt: Date;
  updatedAt:Date;
  club:ClubType | null ,
  school:School | null,
  userType:UserType | null,
  level: Level | null,
  image:string  
};
type SessionStrategyType = 'jwt';



export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: Record<'email' | 'password', string> | undefined): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
      
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            userName:true,
            role: true,
            hashedPassword: true,
            createdAt: true,
            updatedAt: true,
            email: true,
            school:true,
            userType:true,
            club:true,
            level:true,
            image:true,
          },
        });
      
        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }
        
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
         
        if (!isCorrectPassword) {
          throw new Error('Password Invalid');
        }
      
      
        return {
          id: `${user.id}`,
          userName :user.userName,
          email :user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          hashedPassword: user.hashedPassword,
          school:user.school,
          userType:user.userType, 
          club:user.club,  
          level:user.level ,  
          image:user.image || '',  
          
        };
      },
    }),
  ],
  callbacks:{

   async jwt({ token, user }: { token: any; user: any })  {
    
    if (user) {
      return{
        ...token,
        id:user.id,
        userName: user.userName,
        email: user.email,
        role:user.role,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt,
        club:user.club,
        school:user.school,
        userType:user.userType,
        level:user.level,
        image:user.image,

      }
    }
    


    return token
  },
    
  async session({ session, token }: { session: any; token: any }) {
    return{
      ...session,
      id:token.sub,
      userName:token.userName,
      email:token.email,
      role:token.role,
      createdAt:token.createdAt,
      updatedAt:token.updatedAt,
      club:token.club,
      school:token.school,
      userType:token.userType,
      level:token.level,
      image:token.image,
    }
    },
  
},

  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt' as SessionStrategyType,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth;



