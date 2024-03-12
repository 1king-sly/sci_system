import Sidenav from "./component/Sidenav";
import NavBar1 from "@/app/(pages)/Component/NavBar1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className='w-full h-full flex  overflow-hidden overflow-x-hidden gap-1 mb-0'>
    <div className=" w-[20vw] max-[768px]:hidden">
        <Sidenav/>

      </div>
    <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll">{children}</div>  
  </div>
  );
}
