"use client";
import React from "react";
import "@/css/aboutPage.css";
import QRCode from "react-qr-code";

const Page = () => {
  return (
    <div className="about_main_container w-full dark:bg-gray-900">
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-2xl p-8">
          <p className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            About Me
          </p>

          <div className="mb-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Personal Details
            </p>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              I’m a Full Stack Developer learning MERN Stack & Next.js. I enjoy
              building web applications, solving problems, and making
              user-friendly designs. Always eager to learn and improve my
              skills!
            </p>
          </div>

          <div className="mb-6">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              Skills & Proficiencies
            </p>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Technical Skills
                </p>
                <ul className="list-disc list-inside text-gray-700 ">
                  <li className="font-semibold dark:text-gray-300 sm:text-lg text-xs">React.js, Next.js, TypeScript, Redux Toolkit</li>
                  <li className="font-semibold dark:text-gray-300 sm:text-lg text-xs">Node.js, Express.js, Socket.io</li>
                  <li className="font-semibold dark:text-gray-300 sm:text-lg text-xs">MongoDB, Firebase</li>
                  <li className="font-semibold dark:text-gray-300 sm:text-lg text-xs">Git/GitHub, REST APIs, WebSockets</li>
                  <li className="font-semibold dark:text-gray-300 sm:text-lg text-xs">Tailwind CSS, Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg p-8 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <QRCode
              value="https://next-portfolio-web-pi.vercel.app/"
              className="w-full h-auto"
              size={256}
              level="H"
            />
          </div>
          <p className="text-xl font-semibold mt-3 capitalize text-center text-gray-900 dark:text-white">
            Check this website on your phone
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
