import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', {y:50, opacity: 0}, {
         y: 0,
         opacity: 1,
         duration: 1,
         ease: 'power2.inOut',
         stagger: 0.2,
         scrollTrigger: {
            trigger: '#skills',
            start: 'top center'
         }
        })
    })
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
                title="Tech Stacks & Skills" 
                sub="👨‍💻 The Tools and Languages I Love Using" 
            />
            <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper flex justify-center items-center h-[200px] mb-2">
                                <TechIcon model={icon} />
                            </div>
                            <div className="px-4 w-full pb-4">
                                <p className="text-center whitespace-pre-line">{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Uncomment this section if you want to display images instead of icons */}
                
                {/* {techStackImgs.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <img src={icon.imgPath}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    </div>
  )
}

export default TechStack