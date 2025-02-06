import {  Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Shared/Navbar";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khabar Lagbe?",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="">
        <nav>
          <Navbar/>
        </nav>
        {children}
      </body>
    </html>
  );
}
