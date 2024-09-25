import React from "react";
import Image from "next/image";
import Cta  from "@/app/_components/cta";
import { FaPlay } from "react-icons/fa";

const MusicCard = ({ src, alt, title, year, category }) => {
  return (
    <div className="flex flex-col justify-between items-center p-8 h-full w-full rounded-3xl shadow-md space-y-4">
      <div className="grid grid-cols-2 w-full justify-between items-start">
        <button className="p-7 rounded-full w-fit ring-1">
          <FaPlay size={24} />
        </button>
        <div className="col-span-1 relative min-h-[19rem] w-full">
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="self-start text-start">
        <h2 className="text-[3.5rem] uppercase leading-none font-black mb-1">
          {title}
        </h2>
        <p className="text-xl">
          {category} | {year}
        </p>
      </div>

      <Cta text="listen everywhere"/>

    </div>
  );
};

export default MusicCard;
