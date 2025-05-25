import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { educationCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  useGSAP(() => {
    gsap.utils.toArray('.edu-card').forEach((card) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'Power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section id="education" className="w-full md:mt-1 mt-20 selection-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Education Background" sub="🎓 My Academic Journey" />
        <div className="mt-16 grid xl:grid-cols-3 gap-10">
          {educationCards.map((card, index) => (
            <div key={index} className="edu-card">
              <GlowCard card={card} index={index} showReview={false}>
                <div>
                  <h1 className="text-2xl font-semibold">{card.institute}</h1>
                  <p className="text-white-50 my-2">🎓 {card.degree}</p>
                  <p className="text-white-50 mb-3">🗓️ {card.duration}</p>
                  <ul className="list-disc ms-5 flex flex-col gap-2 text-white-50">
                    {card.highlights.map((point, i) => (
                      <li key={i} className="text-md">{point}</li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection

