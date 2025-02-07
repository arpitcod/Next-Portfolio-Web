"use client";
import React from "react";
import "@/css/aboutPage.css";
import QRCode from "react-qr-code";
const page = () => {
  // const [text, setText] = useState("");
  return (
    <div className="about_main_container w-full">
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
          <p className="text-4xl font-semibold  mb-4">About Me</p>

          <div className="mb-6">
            <p className="text-xl font-semibold ">Personal Details</p>
            <p className="font-medium">
              I’m a Full Stack Developer learning MERN Stack & Next.js. I enjoy
              building web applications, solving problems, and making
              user-friendly designs. Always eager to learn and improve my
              skills!
            </p>
          </div>

          <div className="mb-6">
            <p className="text-xl font-bold ">Skills & Proficiencies</p>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div>
                <p className="text-lg font-medium ">Technical Skills</p>
                <ul className="list-disc list-inside ">
                  <li className="font-semibold">
                    React.js, Next.js, Typescript, Redux Toolkit
                  </li>
                  <li className="font-semibold">
                    Node.js, Express.js, Socket.io
                  </li>
                  <li className="font-semibold">MongoDB, Firebase</li>
                  <li className="font-semibold">
                    Git/GitHub, REST APIs, WebSockets
                  </li>
                  <li className="font-semibold">Tailwind CSS, Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 flex flex-col items-center">
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <QRCode
      value="https://next-portfolio-web-pi.vercel.app/"
      className="w-full h-auto" // Makes QR code responsive
      size={256} // Adjust size for better scaling
      level="H"
    />
  </div>
  <p className="text-xl font-semibold mt-3 capitalize text-center">
    Check this website on your phone
  </p>
</div>
      </div>
    </div>
  );
};

export default page;
