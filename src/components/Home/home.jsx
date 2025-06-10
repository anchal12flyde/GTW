'use client'
import { useState } from 'react'
import Link from 'next/link'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
    
      <header className="fixed top-0 left-0 w-full bg-white z-50"> 
        <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
          <div className="flex items-center justify-between h-16">
           {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/GTW_Logo.png" 
              alt="GTW Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>


            {/* Desktop Nav */}
           <nav className="hidden md:flex space-x-8 font-medium text-[16px] text-[#313131] leading-none tracking-normal font-inter">
            <Link href="/about" className="">Web</Link>
            <Link href="/contact" className="">Mobile Apps</Link>
            <Link href="/services" className="">GTW SaaS Cloud</Link>
            <Link href="/blog" className="">Digital Transformation</Link>
            <Link href="/expro" className="">ExPro</Link>
          </nav>


            {/* Login Button */}
           <div className="hidden md:block">
            <Link
              href="/login"
              className="block bg-black text-white font-medium text-[20px] text-center py-3 px-7 rounded-lg leading-none tracking-normal transition-all duration-300 hover:bg-[#FFB100] hover:text-black font-inter"
            >
              Client Login
            </Link>

          </div>


            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none"
            >
              <span className="block w-full h-[2px] bg-gray-700" />
              <span className="block w-full h-[2px] bg-gray-700" />
              <span className="block w-full h-[2px] bg-gray-700" />
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 font-inter text-[20px] font-medium text-[#313131] leading-none tracking-normal">
            <Link href="/contact" className="block">Mobile Apps</Link>
            <Link href="/services" className="block">GTW SaaS Cloud</Link>
            <Link href="/blog" className="block">Digital Transformation</Link>
            <Link href="/expro" className="block">ExPro</Link>
            <Link
              href="/login"
              className="block bg-black text-white font-medium text-[26px] text-center py-2 px-4 rounded-lg leading-none tracking-normal hover:bg-[#FFB100] hover:text-black transition-all duration-300 font-inter"
            >
              Client Login
            </Link>

          </div>

          )}
        </div>
      </header>
     

       <main className=" min-h-screen overflow-y-auto">

    {/* Hero Image Section */}
      <section className="relative bg-white font-inter overflow-hidden pb-0">
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-[750px]">
        <img
          src="/images/Hero2.png"
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

      {/* White gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>

         {/* Mobile */}
        <div className="block md:hidden px-4 -mt-42 pb-10 relative z-10">
          <div className="bg-white/30 backdrop-blur-none p-6 w-full max-w-full whitespace-nowrap">
            <h1 className="font-inter font-medium text-[40px] text-[#313131] leading-none tracking-normal">
              Building the<br />
            
                <span className="text-[#FFB100]">Digital Backbone</span> of
              <br />
               Modern Commerce
              
            </h1>
           <p className="font-inter font-medium text-[18px] text-[#313131]  md:text-base md:leading-snug md:text-gray-700 md:mt-3">
            From concept to code, commerce to<br />
            conversion, we design the technology<br />
            infrastructure for tomorrow’s businesses.
          </p>

          </div>

        </div>





  
      {/* Desktop Hero Text - stays overlayed */}
      <div className="hidden md:block absolute inset-x-0 bottom-28 z-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-hero">
          Building the <span className="text-[#FFB100]">Digital Backbone</span><br />
          of Modern Commerce
        </h1>

          <p className="mt-0.5 text-lg lg:text-2xl text-gray-700 font-[510] leading-snug tracking-tight">
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
          <h2 className="text-2xl font-extrabold font-inter">
            <span className="text-black font-extrabold">We build </span>
            <span className="text-black font-extrabold">systems</span>
            <span className="text-black font-extrabold">,</span>
            <span className="text-gray-500 font-extrabold"> not just screens.</span>
          </h2>
        </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img2.png" alt="Modern Websites" className="w-full h-full  rounded-2xl" />
          <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md select-none">
            <p>Modern</p>
            <p>Websites</p>
          </div>

          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img3.png" alt="E-Commerce Infrastructure" className="w-full h-full " />
            <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md">
              <p>E-Commerce</p>
              <p>Digital Infrastructure</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[460px]">
            <img src="/images/img1.png" alt="Mobile Apps" className="w-full h-full " />
            <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md">
              <p>Mobile</p>
              <p>Apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>




      
 <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 bg-opacity-95 text-white py-20 px-6 sm:px-10 mt-16">

 
  <div className="block md:hidden absolute inset-0 flex items-center justify-center z-0">
  <div className="flex flex-col items-center space-y-50 px-6 py-4">
    <h2 className="text-[20vw] text-white/5 font-bold leading-none tracking-wider">
      From
    </h2>
    <h2 className="text-[20vw] text-white/5 font-bold leading-none tracking-wider">
      To
    </h2>
  </div>
</div>




  <div className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
    <h2 className="text-xl sm:text-2xl lg:text-3xl mb-12 text-center lg:text-left">
      We Build. We Digitize. We Transform.
    </h2>

    <div className="max-w-6xl ">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Left Column */}
        <div className="space-y-6 text-lg sm:text-xl lg:text-2xl font-medium">
          <p>Manual operations</p>
          <p>Legacy systems</p>
          
          <p>Scattered tech</p>
        </div>

        {/* Middle + Right Columns */}
        <div className="-ml-6 md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-32">
          
          {/* Arrow - Mobile */}
          <div className="flex justify-center items-center md:hidden my-6">
            <svg className="w-48 h-12 text-[#FFB100] animate-arrowDown" viewBox="0 0 192 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-2xl w-[550px]">
            <p>
              We help organizations rethink the way they run,<br /> by{" "}
              <span className="text-[#FFB100]  font-semibold">
                replacing complexity with clarity – 
              </span>{" "}powered
              <br />
              by purpose-built platforms.
            </p>
            <a href="#" className="underline text-gray-300 hover:text-[#FFB100]  font-[17px] text-md sm:text-xl lg:text inline-block">
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
        <h2 className="text-3xl font-inter font-extrabold tracking-tight mb-12 text-left">
        We build systems,
        <span className="text-white font-semibold tracking-tight"> not just screens.</span>
      </h2>



    {/* Horizontal Scroll Wrapper */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap gap-6 px-1 pb-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl w-80 flex-shrink-0  overflow-hidden">
            <div className="relative rounded-2xl">
              <img
                src="/images/img5.png"
                alt="Ecommerce"
                className="w-full h-48 " // removed margins, made full-width
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
              <h3 className="text-xl font-bold mb-2 text-left">Ecommerce for Scale</h3>
              <p className="text-gray-800 text-sm mb-3 text-left">
                Built a full-stack MERN platform for Itel Mobiles to support D2C sales,
                stock sync, and campaign-driven demand — built to scale across India.
              </p>
              <a href="#" className="font-semibold text-black block text-left">
                Read More
              </a>
            </div>
          </div>


        {/* Card 2 */}
        <div className="bg-white rounded-2xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img4.png"
            alt="Campus"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-left">A Campus Goes Digital</h3>
            <p className="text-gray-800 text-sm mb-3 text-left">
              Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
            </p>
            <a href="#" className="font-semibold text-black block text-left">Read More</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-left">A Campus Goes Digital</h3>
            <p className="text-gray-800 text-sm mb-3 text-left">
              Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
            </p>
            <a href="#" className="font-semibold text-black block text-left">Read More</a>
          </div>
        </div>

        {/* Card 4 (with play button) */}
        <div className="bg-white rounded-2xl w-80 flex-shrink-0  overflow-hidden">
          <div className="relative">
            <img
              src="/images/img5.png"
              alt="Ecommerce"
              className="w-full h-48 object-cover"
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
            <h3 className="text-xl font-bold mb-2 text-left">Ecommerce for Scale</h3>
            <p className="text-gray-800 text-sm mb-3 text-left">
              Built a full-stack MERN platform for Itel Mobiles to support D2C sales, stock sync, and campaign-driven demand — built to scale across India.
            </p>
            <a href="#" className="font-semibold text-black block text-left">Read More</a>
          </div>
        </div>

        {/* Card 5 (same as Card 3, new instance) */}
        <div className="bg-white rounded-2xl w-80 flex-shrink-0  overflow-hidden">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-left">A Campus Goes Digital</h3>
            <p className="text-gray-800 text-sm mb-3 text-left">
              Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
            </p>
            <a href="#" className="font-semibold text-black block text-left">Read More</a>
          </div>
        </div>


        {/* Add more cards as needed */}
      </div>
    </div>
  </div>
</section>


  

      <section className="py-12 px-4 ">
        <div className="max-w-7xl mx-auto lg:px-18">
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

</main>
  
  {/* Footer*/}

     <footer className=" bottom-0 left-0 w-full bg-gray-100 text-black font-inter z-50  h-full">
        <div className="w-full  sm:px-6 lg:px-12 py-12 mx-auto max-w-8xl">
          {/* Top footer: logo and form */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-4 py-6  rounded-full bg-white w-full">
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2 ">
            <img src="/images/GTW_Logo.png" alt="GTW Logo" className="h-10 w-auto px-8" />
          </div>

          
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
