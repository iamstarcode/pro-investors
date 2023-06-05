import NavBar from "@/components/NavBar";
import localFont from "next/font/local";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({ src: "../../public/fonts/Satoshi-Variable.woff2" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {" "}
        <div className={` bg-base-100 text-[#F2F2F2] `}>
          <div className="min-h-16 bg-i-secondary">
            <div className="mx-auto w-full max-w-7xl">
              <NavBar />
              <Header />
            </div>
          </div>
          <div className=" py-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
