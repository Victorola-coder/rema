export default function Tour({ location, city, date }) {
  return (
    <li className="flex items-start justify-center gap-20">
      <TourDetails>{date}</TourDetails>
      <h2 className="font-black text-[7.2rem] font-bold_ uppercase leading-none">
        {location}
      </h2>
      <TourDetails>{city}</TourDetails>
    </li>
  );
}

const TourDetails = ({ children }) => {
  return <span className="italic font-bold text-lg leading-relaxed font-mediumItalic">{children}</span>;
};
