'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from '../components/Home/Folder/Header'
import Next_Steps from '../components/Home/Folder/Next_Steps'
import Footer from '../components/Home/Folder/Footer'


export default function mobile_apps() {


  return (
    <>
   <Header/>

      <section className="flex flex-col md:flex-row items-center justify-between py-30 px-12 md:px-12 gap-4 md:gap-0 mx-auto pr-6 lg:pr-30 sm:pr-60 ml-9 sm:ml-16">
      <h2 className="mobile-header-title flex-1 md:text-left">Mobile Apps</h2>

      <div className="mobile-divider   justify-center md:justify-center">
       
      </div>

      <p className="mobile-subtitle flex-1 md:text-left text-gray-800">
        Designed to Scale, Perform, <br />
        and Impress.
      </p>
    </section>

    <section className="card-container mx-auto -mt-18 ml-9 sm:ml-18 ">
      <div className="responsive-card"></div>
      <div className="responsive-card"></div>
      <div className="responsive-card"></div>
      <div className="responsive-card"></div>
    </section>






    <Next_Steps/>
   

   
     <Footer/>
   
   
       </>
     )
   }
   