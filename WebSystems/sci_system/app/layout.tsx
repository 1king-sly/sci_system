import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar1 from "./(pages)/Component/NavBar1";
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computer Science ",
  description: "Online Computer Science System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
       <ToasterContext/>

        <div className='w-screen h-screen flex flex-col overflow-hidden gap-1 mb-0'>
            <div className="shadow-md h-[17vh] ">
              <NavBar1></NavBar1>
              </div>
            <div className="flex-1 flex w-full bg-white overflow-y-auto">{children}
            </div>
          </div>      
            </AuthContext>
        </body>
    </html>
  );
}

