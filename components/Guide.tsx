import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col transition-all duration-500">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 mb-3 text-green-50 transition-all duration-300 hover:text-orange-50">
          Smart Navigation
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] transition-colors duration-300 hover:text-green-50">Navigate Like a Pro</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] transition-colors duration-300 hover:text-gray-50">Our intelligent route planner takes you through the most scenic paths while keeping you safe. Works offline, no internet required. Share your routes with friends and discover hidden gems together.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full group">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl lg:rounded-5xl transition-all duration-300 group-hover:shadow-2xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide