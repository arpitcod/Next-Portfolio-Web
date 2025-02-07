'use client';
import Image from "next/image";
import Link from "next/link";
// import { title } from 'process';
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

type Projects = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  repo_link: string;
  live_link?: string;
};
const page = () => {
 

  
  const projects: Projects[] = [
    {
      title: "MERN-Shoes-Bajar-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description:
        "MERN Shoes Bajar App is an e-commerce platform built with the MERN stack. Users can browse, add to cart, and purchase shoes, while admins can manage categories and create new products. It includes user authentication, real-time updates, and a seamless shopping experience. 🚀",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      repo_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "MERN-Pizza-Shop-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description:
        "MERN Pizza Shop App is an online food ordering platform built with the MERN stack. Users can browse pizzas",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      repo_link: "https://github.com/arpitcod/MERN-Pizza-Shop-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "TS-Practise",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "Typescript project and practise",
      technologies: ["React", "Node.js", "Express", "typescript"],
      repo_link: "https://github.com/arpitcod/TS-Practise",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "MERN-Todo-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "mern stack using make todo app",
      technologies: ["React", "Node.js", "Express", "mongo db"],
      repo_link: "https://github.com/arpitcod/MERN-Todo-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "MERN-Chat-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description:
        "MERN Chat App is a simple real-time chat application built with the MERN stack and Socket.io. It allows users to send and receive messages instantly with a smooth and responsive interface. 🚀",
      technologies: ["React", "Node.js", "Express", "mongo db", "Socket.io"],
      repo_link: "https://github.com/arpitcod/MERN-Chat-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "MERN-Thapa-Project",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "Thapa MERN basic bigginer project ",
      technologies: ["React", "Node.js", "Express", "mongo db"],
      repo_link: "https://github.com/arpitcod/MERN-Thapa-Project",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "React-Firebase-Contact-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "google fire base using make contact app ",
      technologies: ["React", "firebase"],
      repo_link: "https://github.com/arpitcod/React-Firebase-Contact-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "React-Foody-Zone",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description:
        "react using food website with filter food category food price and category",
      technologies: ["React"],
      repo_link: "https://github.com/arpitcod/React-Foody-Zone",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "React-Dice-Game",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "react dice game chooose number and tap dice match number ",
      technologies: ["React"],
      repo_link: "https://github.com/arpitcod/React-Dice-Game",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "WEB-Home-Page",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "simple bootstrap webpage",
      technologies: ["bootstrap"],
      repo_link: "https://github.com/arpitcod/WEB-Home-Page",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },

    {
      title: "MERN-Blog-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "MERN STACK Blog App Blog Create Read Update And Delete",
      technologies: [
        "mongo db",
        "react js",
        "node js",
        "express js",
        "material ui",
      ],
      repo_link: "https://github.com/arpitcod/MERN-Blog-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "MERN-Crud-App",
      image: "https://avatars.githubusercontent.com/u/130605168?v=4",
      description: "mern crud app create,read.update,delete",
      technologies: ["mongo db", "react js", "node js", "express js"],
      repo_link: "https://github.com/arpitcod/MERN-Crud-App",
      // live_link: "https://github.com/arpitcod/MERN-Shoes-Bajar-App",
    },
    {
      title: "REACT-Chart-Graph",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "react library diffirent graphs-charts",
      technologies: ["react js"],
      repo_link: "https://github.com/arpitcode2914/REACT-Chart-Graph",
      live_link: "https://reactchartgraphs.vercel.app/",
    },
    {
      title: "Extension-DarkMode",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "darkmode and light mode extension ",
      technologies: ["html", "css", "js"],
      repo_link: "https://github.com/arpitcode2914/Extension-DarkMode",
      // live_link: "https://reactchartgraphs.vercel.app/",
    },
    {
      title: "React-QR-Gen",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "text to qr code generate type anything",
      technologies: ["react"],
      repo_link: "https://github.com/arpitcode2914/React-QR-Gen",
      live_link: "https://react-qr-gen.vercel.app/",
    },
    {
      title: "Mail-sender-app",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "otp send to email for confirming email auhthentication",
      technologies: [
        "react",
        "typescript",
        "node mailer",
        "node js",
        "express js",
      ],
      repo_link:
        "https://github.com/arpitcode2914/Ts-Practise/tree/main/Mail-sender-app",
      // live_link: "https://react-qr-gen.vercel.app/",
    },
    {
      title: "gsap_scroll_animate",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "gsap library using make scroll animate webpage",
      technologies: ["react", "gsap"],
      repo_link:
        "https://github.com/arpitcode2914/Ts-Practise/tree/main/Mail-sender-app",
      live_link: "https://gsapscrollanimate.vercel.app/",
    },
    {
      title: "Next-Portfolio-Web",
      image: "https://avatars.githubusercontent.com/u/176493638?v=4",
      description: "my portfolio my all projects and details",
      technologies: ["next js", "typescript"],
      repo_link:
        "https://github.com/arpitcod/Next-Portfolio-Web",
      live_link: "https://next-portfolio-web-pi.vercel.app/",
    },
   

    // Add more projects here
  ];
// grid 
// eslint-disable-next-line react-hooks/rules-of-hooks
const [gridCols, setGridCols] = useState<number>(1);

  // search projects filter 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchProject,setSearchProject] = useState<string>("")
   const filteredProjects = projects.filter((project) => {
    console.log('Live Link:', project.live_link);
    return (
      project.title.toLowerCase().includes(searchProject.toLowerCase()) ||
      project.description.toLowerCase().includes(searchProject.toLowerCase()) ||
      project.repo_link.toLowerCase().includes(searchProject.toLowerCase()) ||
      (project.live_link && project.live_link?.toLowerCase().includes(searchProject.toLowerCase()))
    );
  });

  // // active btn 

  // const [activeBtn,setActiveBtn] = useState("active")

  // const handleActiveBtn = () =>{
  //   setActiveBtn(activeBtn)
  // }
  
  return (
    <div className="main_projects_container w-full">
      <div className="projects_box overflow-y-scroll h-screen flex justify-center p-6 border border-white">
        {/* <div className="border border-black">
          <p>search bar</p>
        </div> */}
        <div className=" max-w-5xl w-full">
          {/* search input  */}
          <div className="search_input_box flex items-center bg-white rounded-md">
              <IoSearch className="text-2xl ml-2 text-gray-700"/>
              <input type="text" 
                className="w-full p-3 outline-none rounded-md text-gray-700"
                placeholder="search project..."
                value={searchProject}
                onChange={(e) =>setSearchProject(e.target.value)}
              />
          </div>  
          {/* Grid Toggle Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 my-2 ">
            <div>
              <p className="text-white text-lg font-semibold capitalize">total projects: {filteredProjects.length}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setGridCols(1)}
                className={`px-4 py-2  text-black rounded-md font-semibold hover:bg-gray-300  duration-200 ${gridCols === 1 ? "bg-gray-300" :"bg-white"}`}
              >
                1 Column
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`px-4 py-2  text-black rounded-md font-semibold hover:bg-gray-300 duration-200 ${gridCols === 2 ? "bg-gray-300" :"bg-white"}`}
              >
                2 Columns
              </button>
              {/* <button
                onClick={() => setGridCols(3)}
                className={px-4 py-2  text-black rounded-md font-semibold hover:bg-gray-300 duration-200 ${gridCols === 3 ? "bg-gray-300" :"bg-white"}}
              >
                3 Columns
              </button> */}
            </div> 
          </div>
          <div
            className={` grid ${
              gridCols === 1
                ? "grid-cols-1"
                :"grid-cols-2"
                
                 
            }
             
             
                
            `}
          >
            
            {
            filteredProjects.length > 0 ?(
              
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-2xl p-3 my-2 mx-2"
                >
                  <div className=" p-1 flex flex-col sm:flex-row  gap-2">
                    {/* profile logo  */}
                    <div className=" w-20 p-1 sm:24">
                      <Image
                        src="/krishna.jpg"
                        alt={project.title}
                        className="rounded-full w-full  object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    {/* profile text  */}
                    <div className=" flex flex-col gap-1 w-full ">
                      
                      <p className="text-lg sm:text-2xl font-bold text-gray-800">{project.title}</p>
                      <div className="flex items-center ">
                        <FaGithub className="text-gray-800"/> :

                        <Link
                          href={project.repo_link}
                          className="text-xs sm:text-sm text-blue-700 font-bold underline"
                          target="_blank"
                        >
                          {project.repo_link}
                        </Link>
                      </div>
                      {/* <Link href={project.repo_link} className='text-base text-gray-500 font-bold' target='_blank'>{project.repo_link}</Link> */}
                        <div>
                          
                            {project.live_link ? (
                            <div className="flex items-center gap-2">
                              <FaExternalLinkAlt className="text-gray-800"/>
                              <Link
                                href={project.live_link}
                                className="text-xs sm:text-sm text-blue-700 font-bold underline"
                                target="_blank"
                              >
                                Live link
                              </Link>
                            </div>
                            ) : (
                              <p className="text-base text-gray-500 font-bold">none</p>
                            )}

                          </div>
                      {/* <p className='text-base text-gray-500 font-bold'>{project.repo_link}</p> */}
                      {/* <p className='text-base text-blue-700 font-bold'> {true && (project.live_link)}</p> */}
                    </div>
                  </div>
  
                  {/* details  */}
                  <div className="tech_box  mt-3 p-3">
                    <p className="font-semibold text-gray-700">
                      {project.technologies.join(", ")}
                      {/* {project.technologies.toString()} */}
                    </p>
                  </div>
                  <div className="desc_box  mt-3 p-3">
                    <p className="font-semibold text-gray-700">{project.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="">
                <p className="text-center text-2xl font-semibold text-white">Not Found</p>

              </div>
            )}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
