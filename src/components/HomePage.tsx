"use client";
import React from "react";
// import { useState } from "react";
import "@/css/homePage.css";
import Link from "next/link";
import Image from "next/image";
const HomePage = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // download cv
  // const handleDownloadCv = () => {
  //   const link = document.createElement("a");

  //   link.href= "/pdf/Arpit_MERN_STACK.pdf";
  //   link.download = "My_CV.pdf"; // The name of the downloaded file
  //   link.click();
  //   };

  // pdf path ============================================================
  const pdfPath = "/pdf/Arpit-Full-Stack-Resume.pdf";
  // const pdfPath = "/pdf/Arpit_MERN_STACK.pdf";

  return (
    <>
      {/* <div className={`home_container ${darkMode ? "dark" : ""} bg-gray-900 text-white min-h-screen`}> */}
      <div className={`home_container text-white min-h-screen p-5`}>
        {/* Sidebar */}
        {/* <SideBar/> */}

        {/* Main Content */}
        {/* <main className="content_container min-h-screen flex-1 p-6 flex flex-col items-center justify-center border border-black p-2"> */}
        <main className="content_container min-h-screen flex-1 flex flex-col items-center justify-center border border-black p-2">
          <header className="header w-full max-w-4xl text-center mb-10">
            <p className="title text-4xl font-bold">{`Hi, I'm Arpit`}</p>
            <p className="subtitle text-4xl font-bold mt-2">
              Full Stack Developer
            </p>
          </header>

          <section className="content_area border border-white p-2 flex sm:flex-row flex-col gap-3">
            <div className="custom_card project_card flex items-center ml-5">
              <p className="card_title text-lg sm:text-4xl font-semibold text-center sm:text-left ">
                Arpit | Full Stack Developer | Problem Solver | Passionate Coder
                🚀
              </p>
              {/* <a href="/projects" className="custom_button view_projects">View Projects</a> */}
            </div>

            <div className="custom_card about_card flex justify-center">
              <Image
                src="/krishna.jpg" // Remove "/public" as Next.js serves static files from the "public" folder
                alt="krishna"
                width={500} // Set a suitable width
                height={500} // Set a suitable height
                className="rounded-xl border border-white"
              />
            </div>
          </section>
          <div className=" mt-4 flex sm:flex-row flex-col gap-4">
            <Link href={pdfPath} target="_blank">
              <button
                className="home_btns border border-white px-7 py-3 font-semibold hover:bg-slate-100 duration-200"
                // onClick={()=>handleDownloadCv}
              >
                Download Cv
              </button>
            </Link>
            <Link href="/projects">
              <button className="home_btns border border-white px-7 py-3 font-semibold hover:bg-slate-100 duration-200">
                View my work
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
