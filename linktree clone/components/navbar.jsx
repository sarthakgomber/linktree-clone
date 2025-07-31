"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navbar = () => {
  const pathname=usePathname()
  const shownavbar=["/"].includes(pathname)
  return (
    <>
   {shownavbar && <nav className='bg-white w-[80vw] fixed top-10 right-[10vw] rounded-full px-7 py-3 flex justify-between z-10'>
        <div className="logo flex gap-20 items-center">
            <Link href="/"><img className='h-6' src="/logo.svg" alt="" /></Link>
            <ul className='flex gap-10'>
                <Link href="/"><li>Templates</li></Link>
                <Link href="/"><li>Marketplace</li></Link>
                <Link href="/"><li>Discover</li></Link>
                <Link href="/"><li>Pricing</li></Link>
                <Link href="/"><li>Learn</li></Link>
            </ul>
        </div>
        <div className='flex gap-2 font-medium'>
            <button className='login text-black bg-[#eff0ec] p-4 rounded-lg'>Log in</button>
            <button className='signup text-white bg-black  p-4 rounded-full'>Sign up free</button>
        </div>
    </nav>}
    </>
  )
}

export default navbar
