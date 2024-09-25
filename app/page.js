import bg from "@/public/bg.svg";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsSnapchat, BsTwitterX } from "react-icons/bs";
import {
  FaYoutube,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-full">
        <Image
          alt="Rema image for the Background"
          src={bg}
          fill
          objectFit="contain"
          objectPosition="center"
          quality={80}
        />

       <header className="flex mx-10 z-10 font-semibold relative justify-between items-center py-3">
          <Image src={logo} alt="Logo" width={100} height={50} />

          <nav className="flex uppercase text-white font-normal gap-32">
            <a href="/about" className="hover:text-gray-200">
              about
            </a>
            <a href="/music" className="hover:text-gray-200">
              music
            </a>
            <a href="/videos" className="hover:text-gray-200">
              videos
            </a>
            <a href="/tour" className="hover:text-gray-200">
              Tour
            </a>
            <a href="/shop" className="hover:text-gray-200">
              shop
            </a>
          </nav>

          <button className="mr-12 px-6 py-1 rounded-3xl bg-black flex justify-normal items-center gap-4">
            <div className="uppercase">Bookings</div>
            <HiOutlineArrowLongRight
              size={30}
              title="Are you ready to book REMA?. Lets go!!"
            />
          </button>
        </header>

        <div className="absolute flex flex-col justify-between items-center w-[6.25rem] h-[calc(100vh-7.8rem)] left-10 z-10">
          <div className="w-[2px] bg-black basis-[10%]"></div>
          <div className="flex flex-col justify-evenly basis-[35%] text-red-500 items-center gap-5">
            <Link href="" className="p-1 rounded-full bg-black ">
              <FaInstagram color="red" />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <BsSnapchat />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <BsTwitterX />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <FaYoutube />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <FaTiktok />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <FaFacebookF />
            </Link>
            <Link href="" className="p-1 rounded-full bg-black">
              <FaRedditAlien />
            </Link>
          </div>
          <div className="w-[2px] bg-black basis-[40%]"></div>
        </div>
      </main>

      <div className="absolute z-20 bottom-10 w-full overflow-hidden text-white py-2">
        <div className="uppercase font-normal text-8xl whitespace-nowrap inline-block animate-marquee">
          new release - he is - get it on
        </div>
      </div>
    </>
  );
}
