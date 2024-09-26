import { BsArrowUpRight } from "react-icons/bs";

export default function CtaBtn({ text, children }) {
  return (
    <button className="flex items-center ring-2 ring-white self-center uppercase text-4xl gap-6  w-fit justify-center py-3 px-12 text-white rounded-full">
      {text} <BsArrowUpRight size={32} />
    </button>
  );
}
