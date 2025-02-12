"use client"
import React, { useEffect, useState } from 'react'
import "@/css/homePage.css"
import Link from 'next/link';
import "@/css/sideBar.css"
import { usePathname } from 'next/navigation';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
const SideBar = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    // const [active,setActive] = useState({
    //   about:"about",
    //   projects:"projects",
    //   contact:"contact",
    // })
      // path name 
    const pathName = usePathname()

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
          setDarkMode(true);
      }
  }, [darkMode,setDarkMode]);

    // 🌙 Toggle Dark Mode
    const toggleDarkMode = () => {
      if (darkMode) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          setDarkMode(false);
      } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          setDarkMode(true);
      }
  };
  return (
    // <div className=''>
        <aside className="sidebar  sm:h-screen p-6 flex flex-col gap-2 justify-between dark:bg-gray-900">
          <div className='p-2 sidebar_txt_box dark:bg-gray-700'>
            <h2 className=" sidebar_head_txt text-3xl font-bold text-center dark:text-slate-50">Arpit Panchal</h2>

          </div>
            <nav className='sideber_nav p-6 dark:bg-gray-700'>
              <ul className="space-y-3">
                <li><Link href="/" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/" ? "bg-gray-300" :"bg-white"} `}>Home</Link></li>
                <li><Link href="/about" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/about" ? "bg-gray-300" :"bg-white"} `}>About</Link></li>
                <li><Link href="/projects" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/projects" ? "bg-gray-300" :"bg-white"} `}>Projects</Link></li>
                <li><Link href="/contact" className={`sidebar_link hover:bg-gray-300 duration-200 ${pathName === "/contact" ? "bg-gray-300" :"bg-white"} `}>Contact</Link></li>
              </ul>
            </nav>
            <button 
              onClick={toggleDarkMode}
              className={`${darkMode ? "light_mode" :"dark_mode"} dark_mode_toggle mt-6 p-2 font-semibold dark:bg-gray-700`}>
              {darkMode ? <div className='flex items-center justify-center gap-2'> <MdOutlineLightMode className='text-xl'/> Light Mode </div> : <div className='flex items-center justify-center gap-2'> <MdDarkMode className='text-xl'/> Dark Mode </div>}
            </button>
          </aside>
    // </div>
  )
}

export default SideBar