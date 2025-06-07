'use client'
import { useState } from 'react'
import Link from 'next/link'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
           {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/GTW-Logo.png" 
              alt="GTW Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>


            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/about" className="text-black">Web</Link>
              <Link href="/contact" className="text-black">Mobile Apps</Link>
              <Link href="/services" className="text-black">GTW Saas Cloud</Link>
              <Link href="/blog" className="text-black ">Digital Transformation</Link>
              <Link href="/expro" className="text-black">ExPro</Link>
            </nav>

            {/* Login Button */}
           <div className="hidden md:block">
            <Link
              href="/login"
              className="block bg-black text-white text-center py-2 px-8 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black"
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
            <div className="md:hidden mt-2 space-y-2 pb-4">
              <Link href="/about" className="block text-gray-700">About Us</Link>
              <Link href="/contact" className="block text-gray-700">Contact Us</Link>
              <Link href="/services" className="block text-gray-700">Services</Link>
              <Link href="/blog" className="block text-gray-700">Blog</Link>
              <Link href="/expro" className="block text-gray-700">ExPro</Link>
              <Link
                href="/login"
                className="block bg-black text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
              >
                Client Login
              </Link>
            </div>
          )}
        </div>
      </header>
     

      
        <section className="relative bg-white font-inter overflow-hidden pt-20 h-[700px] lg:h-[650px]">
      {/* Desktop Background Image */}
      <img
        src="/images/Hero2.png"
        alt="Digital Transformation Banner"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-left z-0  "
      />

      {/* Mobile Wrapper */}
      <div className="block md:hidden relative z-0">
        {/* Mobile Image with gradient */}
        <div className="relative h-[550px] w-full overflow-hidden">
          <img
            src="/images/Hero1.png"
            alt="Digital Transformation Mobile Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
        
       </div>
       
      </section>



          <section className="px-4 sm:px-6 pt-4 lg:px-8 py-0 bg-white">
      <div className="max-w-6xl   mx-auto">
        {/* Heading */}
        <div className="text-left max-w-2xl mb-8 hidden sm:block">
      <h2 className="text-3xl  font-bold text-gray-900">
        <span className="text-black">We build <span className="font-extrabold">systems</span>,</span> 
        <span className="text-gray-500 font-normal"> not just screens.</span>
      </h2>
    </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
            <img src="/images/img2.png" alt="Modern Websites" className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md select-none">
            <p>Modern</p>
            <p>Websites</p>
          </div>

          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
            <img src="/images/img3.png" alt="E-Commerce Infrastructure" className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md">
              <p>E-Commerce</p>
              <p>Digital Infrastructure</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
            <img src="/images/img1.png" alt="Mobile Apps" className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 text-white text-3xl font-semibold leading-snug drop-shadow-md">
              <p>Mobile</p>
              <p>Apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>




      
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 sm:px-10">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
  <h2 className="text-xl sm:text-2xl lg:text-3xl mb-12 text-center lg:text-left">
    We Build. We Digitize. We Transform.
  </h2>

    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Left Column */}
        <div className="space-y-6 text-lg sm:text-xl lg:text-2xl font-medium">
          <p>Legacy systems</p>
          <p>Manual operations</p>
          
          <p>Scattered tech</p>
        </div>

        {/* Middle + Right Columns Wrapped to Adjust Position */}
        <div className="-ml-6 md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-32">
          
          {/* Arrow - Mobile */}
    <div className="flex justify-center items-center md:hidden my-6">
      <svg
        className="w-48 h-12 text-yellow-500 animate-arrowDown"
        viewBox="0 0 192 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10L96 40L182 10"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Arrow - Desktop */}
    <div className="hidden md:flex justify-center items-center my-6">
      <svg
        className="w-6 h-52 text-yellow-500 animate-arrowDown"
        viewBox="0 0 24 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L20 52L2 102"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>

          {/* Right Column */}
          <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-2xl w-[550px]">
  <p>
    We help organizations rethink the way they run,<br /> by{" "}
    <span className="text-yellow-400 font-semibold">
      replacing complexity with clarity – 
    </span>{" "}powered
    <br />
    by purpose-built platforms.
  </p>
  <a
    href="#"
    className="underline text-gray-200 hover:text-yellow-400 font-medium text-sm sm:text-base md:text-lg inline-block"
  >
    Explore Digital Transformation
  </a>
</div>

        </div>
      </div>
    </div>


</div>

  </section>


        {/* Section 2: Yellow with Cards */}
      <section className="bg-yellow-400 py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl mb-12 text-center">
      We build systems,
      <span className="text-white font-medium"> not just screens.</span>
    </h2>

    {/* Horizontal Scroll Wrapper (with hidden scrollbar) */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap gap-6 px-1 pb-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-4 w-80 flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
          <div className="relative">
            <img
              src="/images/img5.png"
              alt="Ecommerce"
              className="rounded-xl mb-4 mx-auto h-50 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Ecommerce for Scale</h3>
          <p className="text-gray-800 text-sm mb-3 text-center">
            Built a full-stack MERN platform for Itel Mobiles to support D2C sales, stock sync, and campaign-driven demand — built to scale across India.
          </p>
          <a href="#" className="font-semibold text-black block text-center">Read More</a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-4 w-80 flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
          <img
            src="/images/img4.png"
            alt="Campus"
            className="rounded-xl mb-4 mx-auto h-50 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-center">A Campus Goes Digital</h3>
          <p className="text-gray-800 text-sm mb-3 text-center">
            Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
          </p>
          <a href="#" className="font-semibold text-black block text-center">Read More</a>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-4 w-80 flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="rounded-xl mb-4 mx-auto h-50 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-center">A Campus Goes Digital</h3>
          <p className="text-gray-800 text-sm mb-3 text-center">
            Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
          </p>
          <a href="#" className="font-semibold text-black block text-center">Read More</a>
        </div>
        <div className="bg-white rounded-2xl p-4 w-80 flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
          <div className="relative">
            <img
              src="/images/img5.png"
              alt="Ecommerce"
              className="rounded-xl mb-4 mx-auto h-50 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Ecommerce for Scale</h3>
          <p className="text-gray-800 text-sm mb-3 text-center">
            Built a full-stack MERN platform for Itel Mobiles to support D2C sales, stock sync, and campaign-driven demand — built to scale across India.
          </p>
          <a href="#" className="font-semibold text-black block text-center">Read More</a>
        </div>

        <div className="bg-white rounded-2xl p-4 w-80 flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
          <img
            src="/images/img7.png"
            alt="Campus"
            className="rounded-xl mb-4 mx-auto h-50 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-center">A Campus Goes Digital</h3>
          <p className="text-gray-800 text-sm mb-3 text-center">
            Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
          </p>
          <a href="#" className="font-semibold text-black block text-center">Read More</a>
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
          className="border-b border-yellow-300 pb-6 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-start"
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


      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Next Steps</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#"
              className="bg-black text-white text-lg px-8 py-6 rounded-lg w-full sm:w-64 font-medium"
            >
              Become a Client
            </a>
            <a
              href="#"
              className="bg-black text-white text-lg px-8 py-6 rounded-lg w-full sm:w-64 font-medium"
            >
              Join Our Team
            </a>
            <a
              href="#"
              className="bg-black text-white text-lg px-8 py-6 rounded-lg w-full sm:w-64 font-medium"
            >
              Agency Partnerships
            </a>
          </div>
        </div>
      </section>

      
      <div className="min-h-screen flex flex-col">
  {/* Main content area */}
  <main className="flex-grow">
    {/* Your page content goes here */}
  </main>

  {/* Footer stays at the bottom */}
  <footer className="bg-gray-100 text-black font-inter">
    <div className="w-full px-4 sm:px-6 lg:px-12 py-12 mx-auto max-w-7xl">
      {/* Top footer: logo and form */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-4 py-4 rounded-full bg-white">
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
          <img src="/images/GTW-Logo.png" alt="GTW Logo" className="h-10 w-auto" />
        </div>

        <form className="flex flex-col sm:flex-row w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 rounded-full border border-gray-300 outline-none text-sm text-gray-800"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm mb-12">
        {['Company', 'Verticals', 'Resources', 'Industries', 'Careers', 'Legal'].map((category) => (
          <div key={category}>
            <h4 className="font-semibold mb-3 text-gray-900">{category}</h4>
            <ul className="space-y-2 text-gray-700">
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
      <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
        <p>General Tech Works Private Limited</p>
        <p className="mt-2 sm:mt-0">2025</p>
      </div>
    </div>
  </footer>
</div>

      













    </>
  )
}
