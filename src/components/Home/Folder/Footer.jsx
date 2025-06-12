'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function Footer() {

  
  return (


<footer className=" bottom-0 left-0 w-full bg-gray-100 text-black font-inter z-50  h-full">
        <div className="w-full  sm:px-6 lg:px-18 py-10 mx-auto max-w-8xl ">        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-4 py-6 rounded-full bg-white w-full">
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2">
            <img src="/images/GTW_Logo.png" alt="GTW Logo" className="h-10 w-auto px-8" />
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2 px-4 lg:px-0">
            <input
              type="email"
              placeholder="Your Email Address"
              className="email-input"
            />
           <button type="submit" className="subscribe-button">
            Subscribe
          </button>
          </form>
        </div>



          
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm mb-12 px-4 sm:px-6 lg:px-12 ml-10 sm:ml-0">
            {['Company', 'Verticals', 'Resources', 'Industries', 'Careers', 'Legal'].map((category) => (
              <div key={category}>
                <h4 className="category-heading mb-3 ">{category}</h4><br/>
                <ul className="footer-list mt-3 ">
                  <li>The GTW Vision</li>
                  <li>Our Team</li>
                  <li>The GTW Vision</li>
                  <li>Our Team</li>
                  <li>The GTW Vision</li>
                </ul>

              </div>
            ))}
          </div>

          {/* Bottom footer info */}
          <div className="border-t border-gray-300  flex flex-col sm:flex-row justify-between text-sm text-gray-950 pt-8 mx-12  ">
           <p className="company-name">General Tech Works Private Limited</p>
            <p className="mt-2 sm:mt-0 company-name ">2025</p>
          </div>
        </div>
      </footer>

        )
}
