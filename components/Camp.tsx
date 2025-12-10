import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-5xl transition-all duration-300 overflow-hidden group relative`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 relative z-10">
      <div className="flexCenter gap-4 transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="rounded-full bg-green-50 p-4 transition-all duration-300 group-hover:scale-110">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white transition-colors duration-300 group-hover:text-yellow-50 font-bold">{title}</h4>
          <p className="regular-14 text-white/90">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6 transition-transform duration-300 group-hover:translate-y-[4px]">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:z-20"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white font-bold">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:py-20 xl:pb-20 px-6 lg:px-20">
      <div className="mb-10 lg:mb-14">
        <h2 className="bold-40 lg:bold-64 text-gray-90">Choose Your Next Destination</h2>
      </div>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] pb-10">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flex justify-end mt-8 lg:-mt-48">
        <div className="bg-green-50 p-6 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-14 xl:py-16 relative w-full overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform z-20 group">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white transition-transform duration-300 group-hover:translate-y-[-2px]">
            <strong>Explore with Confidence</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-3 text-white/95 transition-colors duration-300 group-hover:text-white">
            Never get lost again. Our offline maps and real-time navigation ensure you can explore remote wilderness with complete peace of mind. Join thousands of adventurers who trust Hilink for their journeys.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp