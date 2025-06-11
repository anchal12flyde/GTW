'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react';



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};
  

  return (
    <>
<header className="relative w-full bg-transparent shadow-none transition-all duration-300">

  <div className="max-w-7xl mx-auto px-4 lg:px-0">
    <div className="flex items-center justify-between h-18">
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/GTW_Logo.png"
          alt="GTW Logo"
          className="h-10 w-auto object-contain"
        />
      </Link>

     
      <nav className="hidden md:flex navbar gap-8 mx-12 ml-46">
        <Link href="/about">Web</Link>
        <Link href="/contact">Mobile Apps</Link>
        <Link href="/services">GTW SaaS Cloud</Link>
        <Link href="/blog">Digital Transformation</Link>
        <Link href="/expro">ExPro</Link>
      </nav>

    
     <div className="hidden md:block">
        <Link href="/login" className="client-login">
          Client Login
        </Link>
      </div>



      <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none">
        <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
        <span className="block h-[2px] w-[30px] bg-gray-700 rounded-sm"></span> {/* Full-width middle line */}
        <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
      </button>

    </div>

    
    {isOpen && (
      <div className="mobile-nav">
        <Link href="/about" className="block">Web</Link>
        <Link href="/contact" className="block">Mobile Apps</Link>
        <Link href="/services" className="block">GTW SaaS Cloud</Link>
        <Link href="/blog" className="block">Digital Transformation</Link>
        <Link href="/expro" className="block">ExPro</Link>
       <Link href="/login" className="client-login">
          Client Login
        </Link>

      </div>
    )}
  </div>
</header>

    
      

    {/* Hero Image Section */}
      <section className="relative bg-white font-inter overflow-hidden pb-0">
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-[750px]">
        <img
          src="/images/hero2.png"
          alt="Digital Transformation Banner"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>
      <div className="block md:hidden relative w-full h-[750px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Hero1.png"
        alt="Digital Transformation Mobile Banner"
        className="w-full h-full object-cover filter blur-none scale-100 opacity-40"
      />

      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>

         {/* Mobile */}
        <div className="block md:hidden px-4 -mt-42 pb-10 relative z-10">
          <div className="bg-white/30 backdrop-blur-none p-6 w-full max-w-full whitespace-nowrap">
            <h1 className="heading-hero-mobile">
              Building the<br />
            
                <span className="text-[#FFB100]">Digital Backbone</span> of
              <br />
               Modern Commerce
              
            </h1>
           <p className="heading-subtitle-mobile">
            From concept to code, commerce to<br />
            conversion, we design the technology<br />
            infrastructure for tomorrow’s businesses.
          </p>

          </div>

        </div>

     
      <div className="hidden md:block absolute inset-x-0 bottom-28 z-10 px-8 ">
        <div className="max-w-7xl mx-auto  ">
          <h1 className="heading-hero">
          Building the <span className="text-[#FFB100]">Digital Backbone</span><br />
          of Modern Commerce
        </h1>

          <p className="heading-subtitle">
            From concept to code, commerce to conversion, we design the<br />
            technology infrastructure for tomorrow’s businesses.
          </p>
        </div>
      </div>

    </section>


      <section className="px-4 sm:px-6 lg:px-8 bg-white mb-16 pt-0">
          <div className="max-w-7xl mx-auto px-4 lg:px-0">
            {/* Heading */}
          <div className="text-left max-w-2xl mb-8 hidden sm:block">
          <h2 className="heading-systems">
          <span className="text-black ">We build </span>
          <span className="text-black ">systems</span>
          <span className="text-black ">,</span>
          <span className="text-[#727171]"> not just screens.</span>
        </h2>

        </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img2.png" alt="Modern Websites" className="w-full h-full  " />
          <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
            <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
              <p className="desktop-heading">Modern</p>
              <p className="desktop-heading">Websites</p>
            </div>
          </div>


          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img3.png" alt="E-Commerce Infrastructure" className="w-full h-full " />
            <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
             
              {/* Desktop */}
              <div className="hidden lg:flex flex-col gap-y-1">
                <p className="desktop-heading">E-Commerce</p>
                <p className="desktop-heading">Digital Infrastructure</p>
              </div>
              {/* Mobile */}
              <div className="flex flex-wrap gap-x-2 lg:hidden">
                <p className="desktop-heading">E-Commerce</p>
                <p className="desktop-heading">Digital</p>
                <p className="desktop-heading w-full">Infrastructure</p>
              </div>
            </div>

          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img1.png" alt="Mobile Apps" className="w-full h-full " />
            <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
            <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
              <p className="desktop-heading">Mobile</p>
              <p className="desktop-heading">Apps</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

  
   <section className="gradient-section text-white py-20 px-6 sm:px-10 mt-16 min-h-[300px] md:min-h-[600px] lg:min-h-[700px]">
      <div className="block md:hidden absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-50 px-6 py-4">
        <h2 className="text-[20vw] text-white/5 font-bold leading-none tracking-wider">
          From
        </h2>
        <h2 className="text-[20vw] text-white/5 font-bold leading-none tracking-wider">
          To
        </h2>
      </div>
    </div>

    <div className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 sm:py-12 -mb-12">
        <h2 className="section-heading mb-18   text-center lg:text-left">
          We Build. We Digitize. We Transform.
        </h2>


        <div className="max-w-6xl ">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
            
            {/* Left Column */}
           <div className="space-y-6 mt-4">
            <p className="left-column-text">Legacy systems</p>
            <p className="left-column-text">Manual operations</p>
            <p className="left-column-text">Scattered tech</p>
          </div>


           
            <div className=" md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-42">
              
             
              <div className="flex justify-center items-center md:hidden my-6">
                <svg className="w-50 h-12 text-[#FFB100] animate-arrowDown" viewBox="0 0 192 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10L96 40L182 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Arrow - Desktop */}
              <div className="hidden md:flex justify-center items-center my-6">
                <svg className="w-6 h-52 text-[#FFB100]  animate-arrowDown" viewBox="0 0 24 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L20 52L2 102" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

             {/* Right Column */}
                <div className="w-full max-w-[680px]">
                  <p className="right-column-text">
                    We help organizations rethink the way they run, by{" "}
                    <span className="text-[#FFB100]">
                      replacing complexity with clarity –
                    </span>{" "}
                    powered by purpose-built platforms.
                  </p><br/>
                 <a href="#" className="explore-link">
                  Explore Digital Transformation
                </a>

                </div>



            </div>
          </div>
        </div>
      </div>
    </section>



        {/* Section 2: Yellow with Cards */}
      <section className="bg-[#FFB100]  py-16 px-4">
        <div className="max-w-7xl mx-auto">
       <div className="text-left max-w-2xl mb-8  sm:block">
          <h2 className="heading-systems">
          <span className="text-black ">We build </span>
          <span className="text-black ">systems</span>
          <span className="text-black ">,</span>
          <span className="text-white"> not just screens.</span>
        </h2>

        </div>



    {/* Horizontal Scroll Wrapper */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap gap-12 px-1 pb-4">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
            <div className="relative rounded-2xl ">
              <img
                src="/images/img5.png"
                alt="Ecommerce"
                className="w-full h-50" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md">
                  <svg
                    className="w-6 h-6 text-[#FFB100] "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
            <div className="ml-4">
              <h3 className="ecom-heading mb-2 text-left">Ecommerce for Scale</h3>
              <p className="paragraph-default mt-4">
                Built a full-stack MERN platform for Itel Mobiles to support D2C sales,
                stock sync, and campaign-driven demand — built to scale across India.
              </p>
              <a href="#" className="read-more-link">
                Read More
              </a>

            </div>
          </div>

          </div>


        {/* Card 2 */}
        <div className="bg-white rounded-3xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img4.png"
            alt="Campus"
            className="w-full h-50 "
          />
          <div className="p-4">
            <div className="ml-4">
            <h3 className="ecom-heading mb-2 text-left">A Campus Goes Digital</h3>
            <p className="paragraph-default mt-4">
               Executed a full-stack for digital transformation for EzStays across 
               hostel ops,transport ,meals,and finance. Used by 5,000+ students across 30+ hostels.
            </p>
            <a href="#" className="read-more-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="w-full h-50 "
          />
          <div className="p-4">
            <div className="ml-4">
            <h3 className="ecom-heading mb-2 text-left">Landing That Converts</h3>
            <p className="paragraph-default mt-4">
              Built a full-stack MERN platform for Itel Mobiles to support D2C sales,
                stock sync, and campaign-driven demand — built to scale across India.
              
            </p>
            <a href="#" className="read-more-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 4 (with play button) */}
        <div className="bg-white rounded-3xl w-80 flex-shrink-0  overflow-hidden">
          <div className="relative">
            <img
              src="/images/img5.png"
              alt="Ecommerce"
              className="w-full h-50 "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-6 h-6 text-[#FFB100] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="ml-4">
            <h3 className="ecom-heading mb-2 text-left">Ecommerce for Scale</h3>
            <p className="paragraph-default mt-4">
              Built a full-stack MERN platform for Itel Mobiles to support D2C sales, 
              stock sync, and campaign-driven demand — built to scale across India.
            </p>
            <a href="#" className="read-more-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 5 (same as Card 3, new instance) */}
        <div className="bg-white rounded-3xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="w-full h-50"
          />
          <div className="p-4">
            <div className="ml-4">
            <h3 className="ecom-heading mb-2 text-left">A Campus Goes Digital</h3>
            <p className="paragraph-default mt-4">
              Built a full-stack MERN platform for Itel Mobiles to support D2C sales,
                stock sync, and campaign-driven demand — built to scale across India.
            </p>
            <a href="#" className="read-more-link">Read More</a>
            </div>
          </div>
        </div>


        {/* Add more cards as needed */}
      </div>
    </div>
  </div>
</section>


  

      <section className="py-12 px-4 ">
        <div className="max-w-7xl mx-auto lg:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">Industries We Empower</h2>

          {/* List */}
          <div className="space-y-10">
            {[
              'Commerce & Consumer Products',
              'Operation & Infrastructure',
              'Education & Knowledge',
              'Services & Professional Firms',
              'Services & Professional Firms',
            ].map((title, index) => (
              <div
                key={index}
                className="border-b border-[#FFB100]  pb-6 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-start"
              >
                {/* Left Content */}
                <div className="sm:max-w-md">
                  <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We enable digital sales, customer journeys, and D2C operations.
                  </p>
                </div>

                {/* Right Tags */}
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  {Array(4).fill(0).map((_, i) => (
                    <span key={i} className="font-semibold text-sm sm:text-base">
                      E-commerce
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-16 px-4 overflow-x-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Next Steps</h2>

            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-full">
              <a
                href="#"
                className="bg-black text-white text-lg px-6 py-6 rounded-lg w-full sm:w-64 font-medium"
              >
                Become <br />a Client
              </a>
              <a
                href="#"
                className="bg-black text-white text-lg px-6 py-6 rounded-lg w-full sm:w-64 font-medium"
              >
                Join Our <br />Team
              </a>
              <a
                href="#"
                className="bg-black text-white text-lg px-6 py-6 rounded-lg w-full sm:w-64 font-medium"
              >
                Agency <br />Partnerships
              </a>
            </div>
          </div>
        </section>


  
  {/* Footer*/}

     <footer className=" bottom-0 left-0 w-full bg-gray-100 text-black font-inter z-50  h-full">
        <div className="w-full  sm:px-6 lg:px-18 py-10 mx-auto max-w-8xl">
          {/* Top footer: logo and form */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-4 py-6 rounded-full bg-white w-full">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2">
            <img src="/images/GTW_Logo.png" alt="GTW Logo" className="h-10 w-auto px-8" />
          </div>

          {/* Email Input and Subscribe Button */}
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2 px-4 lg:px-0">
            <input
              type="email"
              placeholder="Your Email Address"
              className="email-input"
            />
            <button
              type="submit"
              className="subscribe-button"
            >
              Subscribe
            </button>
          </form>
        </div>



          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm mb-12 px-4 sm:px-6 lg:px-12">
            {['Company', 'Verticals', 'Resources', 'Industries', 'Careers', 'Legal'].map((category) => (
              <div key={category}>
                <h4 className="font-extrabold mb-3 text-gray-900 text-[16px]">{category}</h4><br/>
                <ul className="space-y-6 text-gray-950 text-[12px]">
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
          <div className="border-t border-gray-300  flex flex-col sm:flex-row justify-between text-sm text-gray-950 pt-6 mx-12  ">
            <p >General Tech Works Private Limited</p>
            <p className="mt-2 sm:mt-0 ">2025</p>
          </div>
        </div>
      </footer>
   
            













    </>
  )
}
