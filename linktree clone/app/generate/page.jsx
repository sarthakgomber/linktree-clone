"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams()

  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext }
        } else {
          return item
        }
      })
    })
  }

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // ✅ Filter out empty links
    const cleanedLinks = links.filter(link => link.link.trim() && link.linktext.trim());

    const raw = JSON.stringify({
      links: cleanedLinks,
      handle: handle,
      pic: pic,
      desc: desc
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if (result.success) {
      toast.success(result.message)

      // ✅ Reset everything and keep only one empty link field
      setLinks([{ link: "", linktext: "" }])
      setpic("")
      sethandle("")
      setdesc("")
    } else {
      toast.error(result.message)
    }
  }

  return (
    <>
      <div className="bg-white h-screen grid grid-cols-2">
        <div className="col1 flex flex-col justify-center items-center overflow-y-scroll">
          <h1 className='font-bold text-4xl'>Create your LinkTree</h1>
          <div className='flex flex-col gap-5 my-8'>
            <h2 className='font-semmibold text-2xl'> Step 1: Claim your Handle</h2>
            <input value={handle || ""} onChange={e => sethandle(e.target.value)} className='bg-[#f6f7f5] px-4 py-2 border-2 border-blue-200  focus:outline-blue-600 rounded-full' type="text" placeholder='Choose a Handle' />
            
            <h2 className='font-semmibold text-2xl'> Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className='flex gap-3'>
                <input value={item.linktext || ""} onChange={e => handleChange(index, item.link, e.target.value)} className='bg-[#f6f7f5] px-4 py-2 border-2 border-blue-200 focus:outline-blue-600 rounded-full' type="text" placeholder='enter link text' />
                <input value={item.link || ""} onChange={e => handleChange(index, e.target.value, item.linktext)} className='bg-[#f6f7f5] border-2 border-blue-200 px-4 py-2 focus:outline-blue-600 rounded-full' type="text" placeholder='enter link' />
              </div>
            ))}

            <button onClick={addLink} className='p-3 mx-2 bg-blue-500 text-white font-bold rounded-full'>Add Link</button>

            <h2 className='font-semmibold text-2xl'> Step 3: Add Picture and Description</h2>
            <input value={pic || ""} onChange={e => setpic(e.target.value)} className='bg-[#f6f7f5] px-4 py-2 border-2 border-blue-200 focus:outline-blue-600 rounded-full' type="text" placeholder='enter link to your picture' />
            <input value={desc || ""} onChange={e => setdesc(e.target.value)} className='bg-[#f6f7f5] px-4 py-2 border-2 border-blue-200 focus:outline-blue-600 rounded-full' type="text" placeholder='enter Description' />
            
            <button
              disabled={pic === "" || handle === "" || links[0].linktext === ""}
              onClick={submitLinks}
              className='disabled:bg-slate-600 p-3 mx-2 bg-blue-500 text-white font-bold rounded-full'>
              Create Your Linktree
            </button>
          </div>
        </div>

        <div className="col2 relative w-full h-full">
          <img
            src="/img.webp"
            alt="Zoomed"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;
