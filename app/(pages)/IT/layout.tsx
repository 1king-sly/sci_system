import ITDeptSideBar from "../Component/ITDeptSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className='w-full h-full flex  overflow-hidden gap-1 mb-0'>
    <div className=" w-[20vw] max-[768px]:hidden">
        <ITDeptSideBar/>

      </div>
    <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll scroll-smooth">{children}</div>  
  </div>
  );
}
