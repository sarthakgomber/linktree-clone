"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const createTree=() => {
    router.push(`/generate?handle=${text}`)
  }
  const [text, settext] = useState("")
  
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-4">
          <p className="text-[#d2e823] font-bold text-6xl ">
            Everything you
          </p>
          <p className="text-[#d2e823] font-bold text-6xl ">
            are. In one,
          </p>
          <p className="text-[#d2e823] font-bold text-6xl ">
            simple link in bio.
          </p>
          <p className=" text-white my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-5">
            <input value={text} onChange={(e)=>settext(e.target.value)} className="px-3 py-3 focus:outline-green-800 bg-white rounded-md" type="text" placeholder="Enter Your Handle" />
            <button onClick={()=>createTree()} className="px-3 py-3 rounded-full font-medium bg-[#e9c0e9]">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw] pt-28">
              <img src="/3d.png" alt="" />
        </div>
      </section>      
      <section className="bg-[#e9c0e9] min-h-[100vh]">

      </section>
    </main>
  );
}
