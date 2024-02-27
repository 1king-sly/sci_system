'use client'
import Image from "next/image";
import NavBar1 from "./(ui)/Component/NavBar1"
import Header from "./(ui)/Component/Header";
import SideBar from "./(ui)/Component/SideBar";
import { usePathname } from "next/navigation";

export default function Home() {

  const pathname = usePathname()
  return (
    <>
    <div className="w-screen h-[12vh] flex flex-col  bg-sky-400 items-center justify-center">
    <NavBar1/>
    </div>
    <Header/>

    <div className='w-full h-fit flex justify-around overflow-x-clip'>
      <div className="w-4/5 h-full flex">
        <div className="w-1/3 h-fit">
          <SideBar/>
        </div>
        <div className="flex flex-1  min-h-screen overflow-y-auto">
          {pathname}
        </div>

      </div>


    </div>
    </>
  );
}
