import DeptSideBar from '@/app/(pages)/Component/DeptSideBar'
import NavBar1 from "@/app/(pages)/Component/NavBar1";
import Sidebar from './Component/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className='w-full h-full flex overflow-hidden gap-1 mb-0'>
    <div className=" w-[20vw] max-[768px]:hidden">
        <Sidebar/>
      </div>
    <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll [&::-webkit-scrollbar]:hidden">{children}</div>  
  </div>
  );
}


