import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone rounded-3xl lg:rounded-5xl"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start group transition-all duration-300 hover:translate-y-[-8px]">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
        <Image src={icon} alt="map" width={28} height={28} className="transition-transform group-hover:rotate-12" />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize transition-colors duration-300 group-hover:text-green-50">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none transition-colors duration-300 group-hover:text-gray-50">
        {description}
      </p>
    </li>
  )
}

export default Features