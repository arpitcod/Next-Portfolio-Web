"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='main_content_container w-full'>
         <div className="content_box min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h1>
        
        {/* Contact Information */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">Email: <a href="mailto:your.email@example.com" className="text-blue-600">arpitpanchal2914@gmail.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-blue-600">+1234567890</a></p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="https://www.linkedin.com/in/arpit-panchal-2528b5280/" target='_blank' className="text-blue-600 hover:underline font-semibold">LinkedIn</Link>
            <Link href="https://github.com/arpitcod" target='_blank' className="text-gray-800 hover:underline font-semibold">GitHub</Link>
            {/* <Link href="#" target='_blank' className="text-blue-400 hover:underline">Twitter</Link> */}
          </div>
        </div>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="content_btn w-full  text-white py-2 rounded-lg shadow-md ">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page