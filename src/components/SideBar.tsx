"use client"
import React, { useState } from 'react'
import "@/css/homePage.css"
import Link from 'next/link';
import "@/css/sideBar.css"
import { usePathname } from 'next/navigation';
const SideBar = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    // const [active,setActive] = useState({
    //   about:"about",
    //   projects:"projects",
    //   contact:"contact",
    // })

    const pathName = usePathname()
  return (
    // <div className=''>
        <aside className="sidebar  sm:h-screen p-6 flex flex-col gap-2 justify-between">
          <div className='p-2 sidebar_txt_box'>
            <h2 className=" sidebar_head_txt text-3xl font-bold text-center">Arpit Panchal</h2>

          </div>
            <nav className='sideber_nav p-6'>
              <ul className="space-y-3">
                <li><Link href="/" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/" ? "bg-gray-300" :"bg-white"}`}>Home</Link></li>
                <li><Link href="/about" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/about" ? "bg-gray-300" :"bg-white"}`}>About</Link></li>
                <li><Link href="/projects" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/projects" ? "bg-gray-300" :"bg-white"}`}>Projects</Link></li>
                <li><Link href="/contact" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/contact" ? "bg-gray-300" :"bg-white"}`}>Contact</Link></li>
              </ul>
            </nav>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="dark_mode_toggle mt-6 p-2 font-semibold">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </aside>
    // </div>
  )
}

export default SideBar