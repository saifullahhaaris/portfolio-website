import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import TitleHeader from './TitleHeader';

const AnnimatedCounter = () => {
  return (
    <div className="pt-15">
      <TitleHeader 
        title="By the Numbers" 
        sub="📊 A Snapshot of My Work" 
      />
      <div id="counter" className="padding-x-lg xl:mt-16 mt-16">
          <div className="mx-auto grid-4-cols">
              {counterItems.map((item) =>(
                  <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                      <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
                          <CountUp suffix={item.suffix} end={item.value}/>
                      </div>
                      <div className="text-white-50 text-lg">{item.label}</div>
                  </div>
              ))}
              
          </div>
      </div>
    </div>
  )
}

export default AnnimatedCounter