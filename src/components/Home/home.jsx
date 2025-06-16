'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from './Folder/Header'
import Next_Steps from './Folder/Next_Steps'
import Footer from './Folder/Footer'


export default function Home() {


  return (
    <>
   <Header/>

    {/* Hero Section */}
      <section className="relative bg-white font-inter overflow-hidden pb-0">
      {/* Desktop  */}
      <div className="hidden md:block relative w-full h-[750px] ">
        <img
          src="/images/hero2.png"
          alt="Digital Transformation Banner"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>
      <div className="block md:hidden relative w-full h-[750px] overflow-hidden">

    
  <img
    src="/images/Hero1.png"
    alt="Digital Transformation Mobile Banner"
    className="relative  w-full h-[450px]  filter blur-none scale-80 opacity-55"
  />

 
  <div className="absolute bottom-0 left-0 w-full h-20 "></div>


    </div>

         {/* Mobile */}
        <div className="block md:hidden px-4 -mt-99 pb-9 relative z-10  ">
          <div className="  p-6 w-full max-w-full whitespace-nowrap  sm:ml-40">
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
        <div className="max-w-7xl mx-auto  ml-4 sm:ml-20">
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
          <div className="max-w-6xl mx-auto px-4 lg:px-0 ml-2 sm:ml-22">
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

  
      <section className="gradient-section text-white px-6 sm:px-10 mt-10 
      md:min-h-[200px] lg:min-h-[500px] py-2 md:py-12">
          <div className=" block md:hidden absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-50 px-6 py-4">
            <h2 className="text-[25vw] text-white/5 font-600 leading-none tracking-wider">
              From
            </h2>
            <h2 className="text-[25vw] text-white/5 font-600 leading-none tracking-wider">
              To
            </h2>
          </div>
        </div>

        <div className="relative  z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 sm:py-12 -mb-12">
            <h2 className="section-heading mt-25 md:mt-0 mb-18 text-center lg:text-left">
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


              
                <div className=" md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-30">
                  
                
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
                    <div className="w-full max-w-[550px] mb-30 md:mb-0">
                    <p className="right-column-text ">
                  We help organizations rethink the way they run, by{" "}
                  <span className="text-[#FFB100]">
                    replacing complexity with clarity –
                  </span>{" "}
                  powered by purpose-built platforms.
                </p>

                <a href="#" className="explore-link pt-12 md:pt-12 block">
                  Explore Digital Transformation
                </a>
                  </div>




                </div>
              </div>
            </div>
          </div>
        </section>

     <section className="gradient-yellow-section px-4 py-16 ">
        <div className="max-w-7xl mx-auto ml-4 sm:ml-26 pr-6 lg:pr-30 sm:pr-60">
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
        <div className="max-w-7xl mx-auto lg:px-0 ml-4 sm:ml-28">
          <h2 className="heading-systems text-black">Industries We Power</h2>

          <div className="space-y-10 mt-12">
            {[
              'Commerce & Consumer Products',
              'Operation & Infrastructure',
              'Education & Knowledge',
              'Services & Professional Firms',
              'Services & Professional Firms',
            ].map((title, index) => (
            <div
                key={index}
                className="space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-start sm:border-b sm:border-[#FFB100] sm:pb-6"
              >
                
                <div className="sm:max-w">
                  <h3 className="ecom-heading">{title}</h3>
                  <p className="industry-description mt-4">
                    We enable digital sales, customer journeys, and D2C operations.
                  </p>
                </div>
                <div className="block sm:hidden border-b border-[#FFB100] w-full mt-2"></div>
                          
                <div className="w-full sm:w-auto">
                  <div className="flex flex-wrap gap-3 sm:gap-6 mt-7">
                    {Array(4).fill(0).map((_, i) => (
                      <span key={i} className="industry-tag">
                        E-commerce
                      </span>
                    ))}
                  </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   <Next_Steps/>


  <Footer/>


    </>
  )
}
