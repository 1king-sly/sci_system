'use client'
import Image from "next/image";
import NavBar from "./(ui)/Component/NavBar";
import Header from "./(ui)/Component/Header";
import SideBar from "./(ui)/Component/SideBar";
import { usePathname } from "next/navigation";

export default function Home() {

  const pathname = usePathname()
  return (
    <>
    <div className="w-screen h-[23vh] flex flex-col   ">
    <NavBar/>
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
