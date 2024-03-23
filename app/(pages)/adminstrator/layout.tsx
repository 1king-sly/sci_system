'use server'
import Sidebar from './Component/Sidebar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/authUptions';
import { redirect } from 'next/navigation'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getServerSession(authOptions)


  if(!user){
    redirect('/')
  }

  if(user.userType !== 'ADMIN'){
    redirect('/')
  }
  return (

    <div className='w-full h-full flex overflow-hidden gap-1 mb-0'>
    <div className=" w-[20vw] max-[768px]:hidden">
        <Sidebar/>
      </div>
    <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll [&::-webkit-scrollbar]:hidden">{children}</div>  
  </div>
  );
}


