import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import MusicCard from "@/app/_components/musicCard";
import Header from "@/app/_components/header";
import heis from "@/public/heis.svg";
import raveandroses from "@/public/r&r.svg";

export const metadata = {
  title: "🎶 Music",
};

export default function Page() {
  return (
    <section className="flex flex-col bg-black py-8 h-full px-12">
      <Header text="new release">
        <button className="ring-1 p-3 rounded-full">
          <FaArrowLeft size={20} />{" "}
        </button>
        <button className="ring-1 p-3 rounded-full">
          <FaArrowRight size={20} />{" "}
        </button>
      </Header>

      <ul className="flex justify-between py-10 flex-grow gap-16 items-center">
        <MusicCard
          src={heis}
          alt=""
          title="He is"
          year="2024"
          category="Album"
        />
        <MusicCard
          src={raveandroses}
          alt=""
          title="rave  and  roses"
          year="2022"
          category="Album"
        />
      </ul>
    </section>
  );
}
