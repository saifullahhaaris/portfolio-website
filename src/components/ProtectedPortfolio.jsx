// this component is a password-protected portfolio page
// it will only show the portfolio if the correct password is entered
// uncomment the code in App.jsx to enable password protection


import React, { useState } from 'react'
import NavBar from './HeroModels/NavBar'
import Hero from '../sections/Hero'
import TechStack from '../sections/TechStack'
import ShowcaseSection from '../sections/ShowcaseSection'
import FeatureCards from '../sections/FeatureCards'
import ExperienceSection from '../sections/ExperienceSection'
import LogoSection from '../sections/LogoSection'
import EducationSection from '../sections/EducationSection'
import Testimonials from '../sections/Testimonials' 
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'


export default function ProtectedPortfolio() {
  const [authorized, setAuthorized] = useState(false)
  const [input, setInput] = useState('')

  const correctPassword = 'Password' 

  if (authorized) {
    return (
      <>
        <NavBar/>
        <Hero/>
        <TechStack/>
        <ShowcaseSection/>
        <FeatureCards/>
        <ExperienceSection/>
        <LogoSection/>
        <EducationSection/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
      </>
    )
  }

  return (
    <div style={{
      height: "100vh",              
      display: "flex",              
      flexDirection: "column",      
      justifyContent: "center",     
      alignItems: "center",         
      gap: "1rem",                  
      padding: "1rem",
      textAlign: "center",
    }}>
      <h2>Enter "Password" to access portfolio:</h2>
      <input
        type="password"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={() => {
          if (input === correctPassword) setAuthorized(true)
          else alert('Wrong password')
        }}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  )
}
