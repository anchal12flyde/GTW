'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-4xl font-bold italic text-black">GTW</span>
              <span className="h-8 w-[2px] bg-yellow-500" />
              <div className="leading-tight text-md text-gray-800">
                <p className="m-0">General</p>
                <p className="m-0">Tech Works</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/about" className="text-black hover:text-blue-600">Web</Link>
              <Link href="/contact" className="text-black hover:text-blue-600">Mobile Apps</Link>
              <Link href="/services" className="text-black hover:text-blue-600">GTW Saas Cloud</Link>
              <Link href="/blog" className="text-black hover:text-blue-600">Digital Transformation</Link>
              <Link href="/expro" className="text-black hover:text-blue-600">ExPro</Link>
            </nav>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="block bg-black text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
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
              <Link href="/about" className="block text-gray-700 hover:text-blue-600">About Us</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="/expro" className="block text-gray-700 hover:text-blue-600">ExPro</Link>
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
     

      
<section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] overflow-hidden pt-16 bg-white">
  {/* Desktop Background Image */}
  <img
    src="/images/hero2.png" 
    alt="Digital Transformation Banner"
    className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Mobile Background Image */}
  <img
    src="/images/hero1.png" 
    alt="Digital Transformation Mobile Banner"
    className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white z-10" />

  {/* Hero Text Content */}
  <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 transform translate-y-8 sm:translate-y-0 transition-all duration-500">
<h1 className="text-7xl font-medium leading-tight">
  Building the <span className="text-yellow-400 font-medium">Digital Backbone</span><br />
  of Modern Commerce
</h1>
<p className="text-3xl text-gray-800 mt-4">
  From concept to code, commerce to conversion, we design the<br />
  technology infrastructure for tomorrow’s businesses.
</p>

    
  </div>
</section>




       <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-left max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-black">We build <span className="font-extrabold">systems</span>,</span> 
                <span className="text-gray-500 font-normal"> not just screens.</span>
            </h2>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden relative shadow-lg transform transition-transform duration-500 hover:scale-105 h-[450px]">
                <img
                src="/images/images1.png"
                alt="Modern Websites"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden relative shadow-lg transform transition-transform duration-500 hover:scale-105 h-[450px]">
                <img
                src="/images/images2.png"
                alt="E-Commerce Infrastructure"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden relative shadow-lg transform transition-transform duration-500 hover:scale-105 h-[450px]">
                <img
                src="/images/images3.png"
                alt="Mobile Apps"
                className="w-full h-full object-cover"
                />
            </div>

            </div>
        </div>
        </section>


<div className="  my-12 mx-auto max-w-7xl ">
  {/* Section 1: Black to Gray with Arrow */}
  <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-16 sm:px-20 py-10 ">
    <h2 className="text-xl sm:text-xl lg:text-4xl mb-12">
      We Build. We Digitize. We Transform.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left Column */}
      <div className="space-y-6 text-3xl">
        <p>Legacy systems</p>
        <p>Manual operations</p>
        <p>Scattered tech</p>
      </div>

      {/* Arrow */}
      <div className="flex justify-center items-center">
        <svg
          className="w-6 h-48 text-yellow-500"
          viewBox="0 0 24 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L20 50L2 98"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Right Column */}
      <div className="space-y-6 text-lg sm:text-xl">
        <p>
          We help organizations rethink the way they run,
          by <span className="text-yellow-400 font-semibold">replacing complexity with clarity</span> – powered
          by purpose-built platforms.
        </p>
        <a
          href="#"
          className="underline text-white hover:text-yellow-400 font-medium text-lg inline-block lg:text-2xl"
        >
          Explore Digital Transformation
        </a>
      </div>
    </div>
  </div>
</section>


  {/* Section 2: Yellow with Cards */}
<section className="bg-yellow-400 py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl mb-12 text-center">
      We build systems,<span className="text-white font-medium"> not just screens.</span>
    </h2>

    <div className="flex justify-center flex-wrap gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-4 w-80">
        <img
          src="/images/img1.png"
          alt="Ecommerce"
          className="rounded-xl mb-4 mx-auto h-40 object-cover"
        />
        <h3 className="text-xl font-bold mb-2 text-center">Ecommerce for Scale</h3>
        <p className="text-gray-800 text-sm mb-3 text-center">
          Built a full-stack MERN platform for Itel Mobiles to support D2C sales, stock sync, and campaign-driven demand — built to scale across India.
        </p>
        <a href="#" className="font-semibold text-black block text-center">Read More</a>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-4 w-80">
        <img
          src="/images/img1.png"
          alt="Campus"
          className="rounded-xl mb-4 mx-auto h-40 object-cover"
        />
        <h3 className="text-xl font-bold mb-2 text-center">A Campus Goes Digital</h3>
        <p className="text-gray-800 text-sm mb-3 text-center">
          Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
        </p>
        <a href="#" className="font-semibold text-black block text-center">Read More</a>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-4 w-80">
        <img
          src="/images/img1.png"
          alt="Campus"
          className="rounded-xl mb-4 mx-auto h-40 object-cover"
        />
        <h3 className="text-xl font-bold mb-2 text-center">A Campus Goes Digital</h3>
        <p className="text-gray-800 text-sm mb-3 text-center">
          Executed a full-stack digital transformation for EzStays across hostel ops, transport, meals, and finance.
        </p>
        <a href="#" className="font-semibold text-black block text-center">Read More</a>
      </div>
    </div>
  </div>
</section>

</div>

<section className="py-16 px-4 ">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12">Industries We Empower</h2>

    {/* List */}
    <div className="space-y-8">
      {/* Row Item */}
      {[
        'Commerce & Consumer Products',
        'Operation & Infrastructure',
        'Education & Knowledge',
        'Services & Professional Firms',
        'Services & Professional Firms',
      ].map((title, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-yellow-300 pb-6"
        >
          {/* Left Content */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-600">
              We enable digital sales, customer journey, and D2C operations.
            </p>
          </div>

          {/* Right Tags */}
          <div className="flex gap-6 flex-wrap text-right">
            <span className="font-semibold">E-commerce</span>
            <span className="font-semibold">E-commerce</span>
            <span className="font-semibold">E-commerce</span>
            <span className="font-semibold">E-commerce</span>
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












    </>
  )
}
