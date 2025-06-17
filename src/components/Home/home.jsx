'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from './Folder/Header'
import Next_Steps from './Folder/Next_Steps'
import Footer from './Folder/Footer'
import Hero_Section from './Folder/Hero_Section'
import Card_Section from './Folder/Card_Section'
import Explore from './Folder/Explore_Digital'
import Industries from './Folder/IndustriesSection'

export default function Home() {


  return (
    <>
   <Header/>

     <Hero_Section/>
     
     <Card_Section/>
  
    <Explore/>

    
    <Industries/>
          

   <Next_Steps/>


  <Footer/>


    </>
  )
}
