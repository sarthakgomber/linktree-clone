import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linktree - Your favourite link sharing site",
  description: "We redefined link sharing!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
