import Image from "next/image";
import rema1 from "@/public/rema-1.svg";
import rema2 from "@/public/rema-2.png";
import rema3 from "@/public/rema-3.svg";
import rema4 from "@/public/rema-4.svg";
import { title } from "process";

export const metadata = {
    title: "About"
}


export default function Page() {
  return (
    <section className="px-8 gap-8 flex bg-black text-rema flex-col justify-between items-center">
      <h1 className="w-full flex justify-center gap-3 items-center">
        <span className="about-head">r</span>
        <span className="about-head">e</span>
        <span className="flex-grow">
          <Image alt="An Image to describe rema" src={rema2} className="mt-5" />
        </span>
        <span className="about-head">m</span>
        <span className="about-head">a</span>
      </h1>
      <div className="grid w-full grid-cols-4 h-[90vh]">
        <div className="col-span-1 p-4">
          <Image alt="" src={rema4} />
        </div>
        <div className="col-span-2 p-4 flex flex-col justify-center items-center">
          <p className="text-justify leading-relaxed about-text font-semibold tracking-wider flex-grow text-red-500">
            <span className="uppercase p-1 mr-28 rounded-3xl px-4">info</span>{" "}
            Rema, born Divine Ikubor, is a Nigerian Afrobeat sensation who burst
            onto the global music scene with his unique blend of Afrobeat, trap,
            and pop sounds. Hailing from Benin City, Nigeria, Rema’s rise to
            fame began in 2019 when he signed with Jonzing World, a subsidiary
            of Mavin Records, and released his debut self-titled EP Rema, which
            quickly garnered international attention. Known for his infectious
            melodies, versatile style, and captivating performances, Rema has
            become a trailblazer for the new generation of African artists,
            pushing the boundaries of Afrobeat on the global stage.
          </p>
          <div className="basis-1/2 w-full relative">
            <Image alt="" className="object-contain" src={rema3} fill />
          </div>
        </div>
        <div className="col-span-1 p-4">
          <Image alt="" src={rema1} />
        </div>
      </div>
    </section>
  );
}
