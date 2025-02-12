"use client";
import React from "react";
import "@/css/homePage.css";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const pdfPath = "/pdf/Arpit-Full-Stack-Resume.pdf";

  return (
    <div className="home_container text-white min-h-screen p-5 bg-gray-900 dark:bg-gray-900">
      <main className="content_container min-h-screen flex-1 flex flex-col items-center justify-center border border-black p-2 bg-gray-800 dark:bg-gray-800">
        <header className="header w-full max-w-4xl text-center mb-10">
          <p className="title text-4xl font-bold text-gray-100 dark:text-white">{`Hi, I'm Arpit`}</p>
          <p className="subtitle text-4xl font-bold mt-2 text-gray-100 dark:text-white">
            Full Stack Developer
          </p>
        </header>

        <section className="content_area p-2 flex sm:flex-row flex-col gap-3 bg-gray-700 dark:bg-slate-700 rounded-lg shadow-lg">
          <div className="custom_card project_card flex items-center ml-5">
            <p className="card_title text-lg sm:text-4xl font-semibold text-center sm:text-left text-gray-100 dark:text-white">
              Arpit | Full Stack Developer | Problem Solver | Passionate Coder 🚀
            </p>
          </div>

          <div className="custom_card about_card flex justify-center">
            <Image
              src="/krishna.jpg"
              alt="krishna"
              width={500}
              height={500}
              className="rounded-xl shadow-lg dark:shadow-gray-700"
            />
          </div>
        </section>

        <div className="mt-4 flex sm:flex-row flex-col gap-4">
          <Link href={pdfPath} target="_blank">
            <button className="home_btns px-7 py-3 font-semibold bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-black dark:text-white rounded-lg shadow-lg">
              Download CV
            </button>
          </Link>
          <Link href="/projects">
            <button className="home_btns px-7 py-3 font-semibold bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-black dark:text-white rounded-lg shadow-lg">
              View my work
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
