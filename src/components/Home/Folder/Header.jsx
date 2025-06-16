'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

    <header className="w-full sticky top-0 bg-white shadow-md z-50 transition-all duration-300 md:relative md:bg-transparent md:shadow-none md:top-auto">
      <div className="mx-auto pr-6 lg:pr-30 sm:pr-60 ml-9 sm:ml-26">
        <div className="flex items-center justify-between h-12 ">
          <Link href="/" className="flex items-center">
            <img
              src="/images/GTW_Logo.png"
              alt="GTW Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex navbar gap-8 mx-12 ml-46">
            <Link href="/about">Web</Link>
            <Link href="/mobile_apps">Mobile Apps</Link>
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
            <span className="block h-[2px] w-[30px] bg-gray-700 rounded-sm"></span>
            <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
          </button>
        </div>

        {isOpen && (
          <div className="mobile-nav">
            <Link href="/about" className="block">Web</Link>
            <Link href="/mobile_apps" className="block">Mobile Apps</Link>
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
  )
}

