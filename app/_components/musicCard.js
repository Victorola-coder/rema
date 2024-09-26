import React from "react";
import Image from "next/image";
import CtaBtn  from "@/app/_components/cta";
import PlayBtn from "@/app/_components/playBtn";
const MusicCard = ({ src, alt, title, year, category }) => {
  return (
    <div className="flex flex-col justify-between items-center p-8 h-full w-full ring-2 ring-white rounded-3xl shadow-md space-y-4">
      <div className="grid grid-cols-2 w-full justify-between items-start">
        <PlayBtn/>
        <div className="col-span-1 relative min-h-[19rem] w-full">
          <Image draggable={false} src={src} alt={alt} layout="fill" objectFit="cover" />
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

      <CtaBtn text="listen everywhere"/>
    </div>
  );
};

export default MusicCard;
