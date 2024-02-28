import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar1 from "./(ui)/Component/NavBar1";

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
          <div className='w-screen h-screen flex flex-col overflow-hidden gap-1 mb-0'>
            <div className="w-full bg-gray-200 shadow-md h-[10vh]">
              <NavBar1></NavBar1>
              </div>
            <div className="h-full w-full bg-gray-200 overflow-y-scroll">{children}</div>
          </div>
        </body>
    </html>
  );
}
